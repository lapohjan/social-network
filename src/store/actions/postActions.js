export const removePosts = () => ({ type: 'REMOVE_ALL_POSTS' })

// export const createPost = post => ({ type: 'CREATE_NEW_POST', post })

export const createPost = function(post){
    return (dispatch, getState, storeEnhancers) => {
        storeEnhancers.getFirestore().collection('posts').add(post)
            .then(() => {
                dispatch({ type: 'CREATE_NEW_POST' })
            })
            .catch(err => {
                dispatch({ type: 'CREATE_NEW_POST_FAILED', err: err })
            });
    };
}