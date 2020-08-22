import React from 'react'
import PostSummary from './PostSummary'
import { connect } from 'react-redux'

class AllPosts extends React.Component {
    render(){
        console.log('Received a state from reducer');
        console.log(this.props.posts);
        return (
            <div>
                { 
                    this.props.posts ? 
                    this.props.posts.map(post => 
                        <PostSummary post={post} key={post.id}/>
                    ) :
                    'Loading ....'
                }
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        posts: state.posts
    }
}

export default connect(mapStateToProps)(AllPosts);