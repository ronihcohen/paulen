import Firebase from '../FirebaseController';

const requestSaveRating = () => {
    return {
        type: 'REQUEST_SAVE_RATING'
    }
};

const ratingSaved = (rating) => {
    return Object.assign ({
        type: 'RATING_SAVED'
    }, rating);
};

const onStarClick = (rating) => {
    return dispatch => {
        dispatch(requestSaveRating());
        return Firebase.database().ref('/rating/' + rating.uid + '/' + rating.id)
            .update({
                paulenScore: rating.score
            })
            .then(() => dispatch(ratingSaved(rating)))
    }
};

export default onStarClick;