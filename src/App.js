import {connect} from 'react-redux'
import Restaurants from './Restaurants'
import { onStarClick } from './actions'

const mapStateToProps = (state) => {
    return {
        restaurants: state.restaurants
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onStarClick: (room) => {
            dispatch(onStarClick(room))
        }
    }
};


const App = connect(
    mapStateToProps,
    mapDispatchToProps
)(Restaurants);


export default App;
