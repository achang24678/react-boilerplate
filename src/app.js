import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter, { history } from './routers/AppRouter';
import configureStore from './store/configureStore';
import { login, logout } from './actions/auth';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';
import { firebase } from './firebase/firebase';
import LoadingPage from './components/LoadingPage';
import { startFetchPost } from './actions/post';


console.log("NODE_ENV",process.env.NODE_ENV);
console.log("API_KEY",process.env.FIREBASE_API_KEY);
const store = configureStore();

const jsx = ( // all components do have accesss to the store, with Provider setup, we can now use connect
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

let hasRendered = false;
const renderApp = () => {
  if (!hasRendered) { //if not rendered, go and run this code below
    ReactDOM.render(jsx, document.getElementById('app'));
    hasRendered = true;
  }
};+

ReactDOM.render(<LoadingPage />, document.getElementById('app')); //shows loading before we can fecth the data from firebase


firebase.auth().onAuthStateChanged((user) => {  //onAuthStateChanged takes a callback function and runs the callback when the authenticaiton status changed ex: from unauthenticated to authenticated or vice versa

  if (user) { //login case
    store.dispatch(login({ uid: user.uid, displayName: user.displayName, photoURL: user.photoURL }));  //user.uid provided by firebase
    console.log(store.getState());  //testing purpose
    store.dispatch(startFetchPost()).then(() => {
      renderApp();
      if (history.location.pathname === '/') { // check if we are on the login page using location.pathname, only if we are on '/', then redirect to dashboard page, otherwise other refresh will remain at the same page
        history.push('/dashboard');  //when loggin in -> render to /dashboard page, only when user at login page.
      }
    })

  } else {  //logout case, will initiate at first load and when clicked on logout button
    store.dispatch(logout());
    console.log(store.getState());  ///testing purpose
    renderApp();  //when logged out, rerender application then redirect them to login page (root route)
    history.push('/'); //bring back to  /, login page when logged out
  }
});