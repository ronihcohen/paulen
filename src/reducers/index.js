import {combineReducers} from 'redux'
import restaurants from './restaurants'


const restaurantsApp = combineReducers({
    restaurants
});

export default restaurantsApp
