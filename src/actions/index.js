import {writeRating} from '../FirebaseController'


export const receiveRestaurants = (restaurants) => {
    return {
        type: 'RECEIVE_RESTAURANTS',
        restaurants: restaurants
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

