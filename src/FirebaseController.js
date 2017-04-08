import Firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';

import {login, userLoggedIn} from './actions/login'
import fetchRestaurants from './actions/fetchRestaurants';

const config = {
    apiKey: "AIzaSyDSotzZRT7uigJOltCmN9-_chDoy_g7JE8",
    databaseURL: "https://paulen-d5a0d.firebaseio.com/",
    authDomain: "paulen-d5a0d.firebaseapp.com"
};


export const initFirebase = function (store) {
    Firebase.initializeApp(config);

    store.dispatch(fetchRestaurants());

    Firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
            store.dispatch(userLoggedIn(user.displayName));
        } else {
            store.dispatch(login());
        }
    });
};

export default Firebase


