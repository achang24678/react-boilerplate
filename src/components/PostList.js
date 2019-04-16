import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PostListItem from './PostListItem';
import selectPosts from '../selectors/selectors';

export const PostList = (props) => {
    return (
        <div>
            {
                props.post.length === 0 ? (
                    <div>
                        <span>No posts</span>
                    </div>
                ) : (

                        props.post.map((po) => {
                            return <PostListItem key={po.id} {...po} photoURL={po.photo} author={po.name} uid={props.auth.uid}/>
                        })

                )
            }
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        post: selectPosts(state.post, state.filter),
        auth: state.auth
    };
};

export default connect(mapStateToProps)(PostList);