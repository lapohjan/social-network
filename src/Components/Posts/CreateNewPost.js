import React from 'react'

const CreateNewPost = () => {
    return (
    <div className="container">
        <form>
            <div className="input-field">
                <input id="postTitle" type="text" className="validate"/>
                <label for="postTitle">Title:</label>
            </div>
            <div className="input-field">
                <textarea id="postContent" className="materialize-textarea" data-length="500"></textarea>
                <label for="postContent">Content:</label>
            </div>

            <button className="btn waves-effect waves-light" type="submit" name="action">Submit</button>
        </form>
    </div>
 );
}

export default CreateNewPost;