import Firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';

import {receiveRestaurants} from './actions'


const config = {
    apiKey: "AIzaSyDSotzZRT7uigJOltCmN9-_chDoy_g7JE8",
    databaseURL: "https://paulen-d5a0d.firebaseio.com/",
    authDomain: "paulen-d5a0d.firebaseapp.com",

};

Firebase.initializeApp(config);

Firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
        console.log('You are logged in as: ', user.displayName);
    } else {
        const provider = new Firebase.auth.FacebookAuthProvider();
        Firebase.auth().signInWithPopup(provider).then(function(result) {
            var user = result.user;
            console.log('You are logged in as: ', user.displayName);
        }).catch(function(error) {
            var errorMessage = error.message;
            console.log('Auth error: ',errorMessage);
        });
    }
});



export const initFirebase = function (store) {
    Firebase.database().ref('/').once('value').then(function (snapshot) {
        store.dispatch(receiveRestaurants(snapshot.val()))
    });
};

export const writeRating = function(rating) {
    Firebase.database().ref('/' + rating.id).update({
        paulenScore: rating.score
    });
};

