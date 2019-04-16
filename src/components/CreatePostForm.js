import React, { useState } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import uuid from 'uuid';

const CreatePostForm = (props) => {


    const [title, setTitle] = useState(props.post ? props.post.title : '');
    const [body, setBody] = useState(props.post ? props.post.body : '');
    const [createdAt, setCreatedAt] = useState(moment().valueOf());
    const [error, setError] = useState('');

    // const [title, setTitle] = useState(title);
    // const [title, setTitle] = useState(title);

    const onTitleChange = (e) => {
        setTitle(e.target.value);
    }
    const onBodyChange = (e) => {
        setBody(e.target.value);
    }
    const onSave = (e) => {
        e.preventDefault();
        const data = {
            title,
            body,
            createdAt
        }
        if (!title || !body) {
            setError('Please provide title and body');
        } else {
            setError('');
            props.onSubmit(data);
        }
    };

    return (
        <form className="form" onSubmit={onSave}>
            {error && <p className="form__error">{error}</p>}
            <input
                className="text-input"
                type="text"
                placeholder="title"
                autoFocus
                value={title}
                onChange={onTitleChange}
            />
            <textarea
                className="textarea"
                type="text"
                placeholder="Write some stuffs here..."
                value={body}
                onChange={onBodyChange}
            />
            <div>
                <button className="button">Save Post</button>
            </div>

        </form>
    )

};


const mapStateToProps = (state) => ({
    auth: state.auth
})


export default connect(mapStateToProps)(CreatePostForm);