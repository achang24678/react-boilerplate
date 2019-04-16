import React, { useState } from 'react';
import { connect } from 'react-redux';
import CreatePostForm from './CreatePostForm';
import { startCreatePost } from '../actions/post';
import uuid from 'uuid';

const CreatePostPage = (props) => {
    
    const onSubmit = (postStates) => {
        
        props.startCreatePost(postStates);
        props.history.push('/dashboard');
        
    };
    return (
        
        <div className="content-container">
            <p>Create post here</p>
            <CreatePostForm onSubmit={onSubmit}/>

        </div>
    );
};
const mapDispatchToProps = (dispatch) => ({
    startCreatePost: (postStates) => dispatch(startCreatePost(postStates))
});

export default connect(undefined, mapDispatchToProps)(CreatePostPage);