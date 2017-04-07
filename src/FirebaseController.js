import Firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';

import {receiveRestaurants, userLoggedIn} from './actions'


const config = {
    apiKey: "AIzaSyDSotzZRT7uigJOltCmN9-_chDoy_g7JE8",
    databaseURL: "https://paulen-d5a0d.firebaseio.com/",
    authDomain: "paulen-d5a0d.firebaseapp.com",

};

Firebase.initializeApp(config);

export const initFirebase = function (store) {
    Firebase.database().ref('/').once('value').then(function (snapshot) {
        store.dispatch(receiveRestaurants(snapshot.val()))
    });

    Firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
            store.dispatch(userLoggedIn(user.displayName));
        } else {
            const provider = new Firebase.auth.FacebookAuthProvider();
            Firebase.auth().signInWithRedirect(provider);
            Firebase.auth().getRedirectResult().then(function(result) {
                var user = result.user;
                store.dispatch(userLoggedIn(user.displayName));
            }).catch(function(error) {
                var errorMessage = error.message;
                store.dispatch(userLoggedIn(errorMessage));
            });
        }
    });
};

export const writeRating = function(rating) {
    Firebase.database().ref('/' + rating.id).update({
        paulenScore: rating.score
    });
};

