import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { startLogout } from '../actions/auth';


export const Header = (props) => (
  <header className="header">
    <div className="content-container">
      <div className="header__content">
        <Link className="header__title" to="/dashboard">
          <h1>My Blog</h1>
        </Link>
        <div className="header__list">
          <Link className="button button--link" to="/create">
            <h3>Create Post</h3>
          </Link>
          <button className="button button--link" onClick={props.startLogout}>Logout</button>
          <div className="button button--link">
            {props.uid ?
              (<p>yes id</p>)
              :
              (<p>no id</p>)
            }
          </div>
        </div>

      </div>
    </div>
  </header>
);



const mapDispatchToProps = (dispatch) => ({   //implicitly return
  startLogout: () => dispatch(startLogout())
});

const mapStateToProps = (state) => ({
  uid: state.auth.uid
});


export default connect(mapStateToProps, mapDispatchToProps)(Header);
