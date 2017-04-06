import Firebase from 'firebase/app';
import 'firebase/database';
import {receiveRestaurants} from './actions'


const config = {
    apiKey: "AIzaSyDSotzZRT7uigJOltCmN9-_chDoy_g7JE8",
    databaseURL: "https://paulen-d5a0d.firebaseio.com/",
};

Firebase.initializeApp(config);

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

