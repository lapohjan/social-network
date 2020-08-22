import Firebase from 'firebase';

export const createPost = (post) => {
    return (dispatch) => {
        Firebase.firestore().collection('posts').add(post)
            .then(() => {
                dispatch({ type: 'CREATE_POST_SUCCESSFULL' })
            }).catch(err => {
                dispatch({ type: 'CREATE_POST_ERROR' }, err)
            })
    }
}