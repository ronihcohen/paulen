import Firebase from '../FirebaseController';


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

export const userLoggedIn = (user) => {
    return {
        type: 'USER_LOGGED_IN',
        user: user
    };
};

export const login = () => {
    return dispatch => {
        dispatch(tryToLogin());
        const provider = new Firebase.auth.FacebookAuthProvider();
        Firebase.auth().signInWithRedirect(provider);

        return Firebase.auth().getRedirectResult()
            .then(function (result) {
                const user = result.user;
                if (user) {
                    dispatch(userLoggedIn(user.displayName));
                }
            }).catch(function (error) {
                const errorMessage = error.message;
                dispatch(loginError(errorMessage));
            });
    }
};