

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
        case 'USER_LOGGED_IN':
            return Object.assign({}, state, {
                user: action.user
            });
        default:
            return state
    }
};


export default restaurants
