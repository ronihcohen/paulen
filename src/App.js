import {connect} from 'react-redux'
import RestaurantsList from './Restaurants/RestaurantsList'
import { onSearch, onSortBy } from './actions'
import onStarClick from './actions/saveRating'
import { signOut } from './actions/login'
import login from './actions/login'


const mapStateToProps = (state) => {
    return {
        restaurants: state.restaurants.data,
        searchVal: state.restaurants.searchVal,
        user: state.restaurants.user,
        sorting: state.restaurants.sorting
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
        signOut: (e) => {
            e.preventDefault();
            dispatch(signOut())
        },
        onSortBy: (columnName) => {
            dispatch(onSortBy(columnName))
        },
        loginWithGoogle: (e) => {
            e.preventDefault();
            dispatch(login('GOOGLE'))
        },
        loginWithFacebook: (e) => {
            e.preventDefault();
            dispatch(login('FACEBOOK'))
        }
    }
};


const App = connect(
    mapStateToProps,
    mapDispatchToProps
)(RestaurantsList);


export default App;
