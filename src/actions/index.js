import {writeRating} from '../FirebaseController'

function compare(a, b) {
    a.paulenScore = a.paulenScore || 0;
    b.paulenScore = b.paulenScore || 0;
    if (a.paulenScore > b.paulenScore)
        return -1;
    if (a.paulenScore < b.paulenScore)
        return 1;
    return 0;
}

export const receiveRestaurants = (restaurants) => {
    return {
        type: 'RECEIVE_RESTAURANTS',
        restaurants: restaurants.sort(compare)
    }
};

export const onStarClick = (rating) => {
    writeRating(rating);
    return Object.assign ({
        type: 'STAR_CLICK'
    }, rating);
};

export const onSearch = (searchVal) => {
    return {
        type: 'FILTER_RESTAURANTS',
        searchVal: searchVal
    };
};

export const userLoggedIn = (user) => {
    return {
        type: 'USER_LOGGED_IN',
        user: user
    };
};

