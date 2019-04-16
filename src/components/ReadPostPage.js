import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import database from '../firebase/firebase';
import { Link } from 'react-router-dom';

export const ReadPostPage = (props) => {
    const [post, setPost] = useState(props.post);
    // useEffect(() => {
    //     database.ref(`postcol/${props.match.params.id}`).once('value').then((snapshot) => {
    //         const val = snapshot.val();
    //         if (val) {
    //             setPost(val);
    //         }
    //     }).catch((e) => {
    //         console.log('Error Fetching data', e);
    //     });
    // }, [])
 

    let isAuthor = post.name === props.displayName;

    return (
        <div className="readpage">
            <article className="article">
                <div className="article__header">
                    <h1 className="article__title">{post.title}</h1>
                    {isAuthor ? (<Link className="button--edit" to={`/edit/${props.match.params.id}`}>Edit Post</Link>) : (<p>no</p>)}
                </div>

                <div className="post-info">
                    <img src={post.photo} className="post-info__photo" alt={post.author} />
                    <div className="post-info__content">
                        <p className="post-info__author">{post.name}</p>
                        <time dateTime={new Date(post.createdAt)} className="post-info__date">
                            {moment(post.createdAt).format('MMM Do, YYYY')}
                        </time>
                        {props.isAuthenticated}
                    </div>
                </div>
                <div className="article__content">{post.body}</div>
            </article>

        </div>
    )
}
//className="post-info__author"
//className="post-info__photo"
//className="post-info"
//className="readpage"


const mapStateToProps = (state, props) => ({
    post: state.post.find((po) => po.id === props.match.params.id),
    isAuthenticated: !!state.auth.uid,
    uid: state.auth.uid,
    displayName: state.auth.displayName
});

export default connect(mapStateToProps)(ReadPostPage);