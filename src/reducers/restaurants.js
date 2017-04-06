

const restaurants = (state = {data: []}, action) => {
    switch (action.type) {
        case 'RECEIVE_RESTAURANTS':
            return Object.assign({}, state, {
                data: action.restaurants
            });
        case 'FILTER_RESTAURANTS':
            return Object.assign({}, state, {
                searchVal: action.searchVal
            });
        default:
            return state
    }
};


export default restaurants
