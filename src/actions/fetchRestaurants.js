import Firebase from '../FirebaseController';

const compare = (a, b) => {
    a.paulenScore = a.paulenScore || 0;
    b.paulenScore = b.paulenScore || 0;
    if (a.paulenScore > b.paulenScore)
        return -1;
    if (a.paulenScore < b.paulenScore)
        return 1;
    return 0;
};

const requestRestaurants = () => {
    return {
        type: 'REQUEST_RESTAURANTS'
    }
};

const receiveRestaurants = (restaurants, user) => {
    return {
        type: 'RECEIVE_RESTAURANTS',
        restaurants: restaurants.sort(compare),
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