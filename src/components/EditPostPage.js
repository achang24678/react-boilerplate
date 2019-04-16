import React from 'react';
import { connect } from 'react-redux';

export const EditPostPage = () => {
    return (
        <div>
            EditPage
        </div>
    )
}

const mapStateToProps = (state, props) => ({
    post: state.post.find((po) => po.id === props.match.params.id)
  });
  
  const mapDispatchToProps = (dispatch, props) => ({
    
  });
  

export default connect(mapStateToProps, mapDispatchToProps)(EditPostPage)