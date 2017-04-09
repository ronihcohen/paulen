import {connect} from 'react-redux'
import Restaurants from './Restaurants'
import { onSearch, onSortBy } from './actions'
import onStarClick from './actions/saveRating'
import { signOut } from './actions/login'

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
        }
    }
};


const App = connect(
    mapStateToProps,
    mapDispatchToProps
)(Restaurants);


export default App;
