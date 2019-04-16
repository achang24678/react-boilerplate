import React from 'react';
import { connect } from 'react-redux';
import CreatePostForm from './CreatePostForm';
import { startEditPost, startRemovePost } from '../actions/post';

export const EditPostPage = (props) => {
    
    const onSubmit = (postUpdates) => {
        props.startEditPost(props.post.id, postUpdates);
        props.history.push('/');
    }
    const onRemove = () => {
        props.startRemovePost({ id: props.post.id });
        props.history.push('/');
    }
    
    return (
        <div>
            <div className="page-header">
                <div className="content-container">
                    <h1 className="page-header__title">Edit Post</h1>
                </div>
            </div>
            <div className="content-container">
                <CreatePostForm post={props.post} onSubmit={onSubmit}/>
                <button className="button button--secondary" onClick={onRemove}>Remove</button>
            </div>
        </div>
    )
}

const mapStateToProps = (state, props) => ({
    post: state.post.find((po) => po.id === props.match.params.id)
});

const mapDispatchToProps = (dispatch, props) => ({
    startRemovePost: (data) => dispatch(startRemovePost(data)),
    startEditPost: (id, post) => dispatch(startEditPost(id, post))
});


export default connect(mapStateToProps, mapDispatchToProps)(EditPostPage)