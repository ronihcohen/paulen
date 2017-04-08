import Firebase from '../FirebaseController';

const requestSaveRating = () => {
    return {
        type: 'REQUEST_SAVE_RATING'
    }
};
const ratingSaved = () => {
    return {
        type: 'RATING_SAVED'
    }
};

const onStarClick = (rating) => {
    return dispatch => {
        dispatch(requestSaveRating());
        return Firebase.database().ref('/rating/' + rating.uid + '/' + rating.id)
            .update({
                paulenScore: rating.score
            })
            .then(() => dispatch(ratingSaved()))
    }
};

export default onStarClick;