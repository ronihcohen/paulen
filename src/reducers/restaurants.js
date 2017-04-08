const restaurants = (state = {data: []}, action) => {
    switch (action.type) {
        case 'RECEIVE_RESTAURANTS':
            return {
                ...state,
                data: action.restaurants,
                user: action.user
            };
        case 'FILTER_RESTAURANTS':
            return {
                ...state,
                searchVal: action.searchVal
            };

        default:
            return state
    }
};


export default restaurants
