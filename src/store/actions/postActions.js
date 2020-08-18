import Firebase from 'firebase';

const db = Firebase.firestore();

export const createPost = (post) => {
    return (dispatch) => {
        db.collection('posts').add(post)
        .then(() => {
            dispatch({ type: 'CREATE_POST_SUCCESSFULL' })
        }).catch(err => {
            dispatch({ type: 'CREATE_POST_ERROR' }, err)
        })
    }
}