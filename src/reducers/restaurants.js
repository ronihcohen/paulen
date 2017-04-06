

const restaurants = (state = [], action) => {
    switch (action.type) {
        case 'RECEIVE_RESTAURANTS':
            return action.restaurants;
        case 'STAR_CLICK':
            console.log(action);
            return state;
        default:
            return state
    }
};


export default restaurants
