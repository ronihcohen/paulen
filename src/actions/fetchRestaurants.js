import Firebase from '../FirebaseController';

const requestRestaurants = () => {
    return {
        type: 'REQUEST_RESTAURANTS'
    }
};

const receiveRestaurants = (restaurants, user) => {
    return {
        type: 'RECEIVE_RESTAURANTS',
        restaurants: restaurants,
        user: user
    }
};

const fetchRating = (restaurants, user) => {
    return Firebase.database().ref('/rating/' + user.uid).once('value')
        .then(snapshot => snapshot.val())
        .then(rating => restaurants.map((restaurant, index) => {
            if (rating && rating[index]) {
                return Object.assign(restaurant, rating[index]);
            }
            return restaurant
        }));
};

const fetchRestaurants = (user) => {
    return dispatch => {
        dispatch(requestRestaurants());
        return Firebase.database().ref('/data').once('value')
            .then(snapshot => snapshot.val())
            .then(restaurants => fetchRating(restaurants, user))
            .then(restaurants =>
                dispatch(receiveRestaurants(restaurants, user)))
    }
};

export default fetchRestaurants