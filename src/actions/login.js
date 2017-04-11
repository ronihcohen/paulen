import Firebase from '../FirebaseController';
import fetchRestaurants from './fetchRestaurants';

const providers = {
    'FACEBOOK': new Firebase.auth.FacebookAuthProvider(),
    'GOOGLE': new Firebase.auth.GoogleAuthProvider()
};

const loginError = (errorMessage) => {
    return {
        type: 'LOGIN_ERROR',
        errorMessage: errorMessage
    }
};

const tryToLogin = () => {
    return {
        type: 'TRY_TO_LOGIN'
    }
};

const login = (provider) => {
    return dispatch => {
        dispatch(tryToLogin());
        Firebase.auth().signInWithRedirect(providers[provider]);

        return Firebase.auth().getRedirectResult()
            .then(function (result) {
                const user = result.user;
                if (user) {
                    dispatch(fetchRestaurants({
                        name: user.displayName,
                        uid: user.uid
                    }));
                }
            }).catch(function (error) {
                const errorMessage = error.message;
                dispatch(loginError(errorMessage));
            });
    }
};

export const signOut = () => {
    return dispatch => {
        return Firebase.auth().signOut();
    }
};

export default login