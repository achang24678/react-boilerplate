import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';

const PostListItem = ({ id, title, body, createdAt, photoURL, author, uid }) => (
    <div className="list-item">
        <div className="list-item__content">
            <img src={photoURL} className="post-info__photo" />
            <p className="post-info__author">{author}</p>
            <h3 className="list-item__title">{title}</h3>
            <span className="post-info__date">{moment(createdAt).format('MMMM Do, YYYY')}</span>
            <Link className="read-more" to={`/read/${id}`}>Read more...</Link>
        </div>
        
    </div>
);

export default PostListItem;