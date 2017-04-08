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

const receiveRestaurants = (restaurants) => {
    return {
        type: 'RECEIVE_RESTAURANTS',
        restaurants: restaurants.sort(compare)
    }
};

const fetchRestaurants = () => {
    return dispatch => {
        dispatch(requestRestaurants());
        return Firebase.database().ref('/').once('value')
            .then(snapshot => dispatch(receiveRestaurants(snapshot.val())))
    }
};

export default fetchRestaurants