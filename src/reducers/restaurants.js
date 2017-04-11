import { orderBy } from 'lodash';

const restaurants = (state = {data: [], sorting: [false, false]}, action) => {
    switch (action.type) {
        case 'RECEIVE_RESTAURANTS':
            return {
                ...state,
                data: orderBy(action.restaurants,
                    ({ paulenScore }) => paulenScore || '', ['desc']
                ).filter(restaurant => restaurant.score > 0),
                user: action.user
            };
        case 'FILTER_RESTAURANTS':
            return {
                ...state,
                searchVal: action.searchVal
            };
        case 'SORT_RESTAURANTS':
            return {
                ...state,
                sorting: action.columnName
            };
        case 'RATING_SAVED':
            return {
                ...state,
                data: state.data.map(restaurant => {
                    if (restaurant.id === parseInt(action.id, 10)){
                        restaurant.paulenScore = action.score
                    }
                    return restaurant;
                })
            };
        default:
            return state
    }
};


export default restaurants
