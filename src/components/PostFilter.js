import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { setTitleFilter, setSearchbyAuthor, setSearchbyTitle } from '../actions/filter';


const PostFilter = (props) => {
    const onTitleChange = (e) => {
        props.setTitleFilter(e.target.value)
    };
    const onSortChange = (e) => {
        
        if (e.target.value === 'title') {
            props.setSearchbyTitle();
        } else if (e.target.value === 'auth') {
            props.setSearchbyAuthor();
        }
    }
    
    return (
        <div>
            <input 
                type="text"
                placeholder="Search Post..."
                value={props.filter.title}
                onChange={onTitleChange}
            />
            <select value={props.filter.searchBy} onChange={onSortChange}>
				<option value="title">Title</option>
				<option value="auth">Author</option>
			</select>
        </div>
    );
};

const mapStateToProps = (state) => ({
    filter: state.filter
})
const mapDispatchToProps = (dispatch) => ({
    setTitleFilter: (title) => dispatch(setTitleFilter(title)),
    setSearchbyAuthor: () => dispatch(setSearchbyAuthor()),
    setSearchbyTitle: () => dispatch(setSearchbyTitle())
});


export default connect(mapStateToProps, mapDispatchToProps)(PostFilter);