import {connect} from 'react-redux'
import Restaurants from './Restaurants'
import { onSearch } from './actions'
import onStarClick from './actions/saveRating'
import { signOut } from './actions/login'

const mapStateToProps = (state) => {
    return {
        restaurants: state.restaurants.data,
        searchVal: state.restaurants.searchVal,
        user: state.restaurants.user
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onStarClick: (restaurant) => {
            dispatch(onStarClick(restaurant))
        },
        onSearch: (event, searchVal) => {
            dispatch(onSearch(searchVal))
        },
        signOut: () => {
            dispatch(signOut())
        }
    }
};


const App = connect(
    mapStateToProps,
    mapDispatchToProps
)(Restaurants);


export default App;
