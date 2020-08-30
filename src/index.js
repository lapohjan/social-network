import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker'
import { createStore, applyMiddleware, compose } from 'redux'
import rootReducer from './store/reducers/rootReducer'
import { Provider, useSelector } from 'react-redux'
import thunk from 'redux-thunk'
import { getFirebase, ReactReduxFirebaseProvider, isLoaded } from 'react-redux-firebase';
import { getFirestore, reduxFirestore, createFirestoreInstance } from 'redux-firestore';
import { FIREBASE_CONFIG as fbConfig } from './config/fbConfig';
import firebase from 'firebase/app';

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk.withExtraArgument({getFirebase, getFirestore})),
    reduxFirestore(firebase, fbConfig)
  )
);


const rrfConfig = {
  userProfile: 'users',
  useFirestoreForProfile: true
}
const rrfProps = {
  firebase,
  config: rrfConfig, fbConfig,
  dispatch: store.dispatch,
  createFirestoreInstance,
}

const AuthIsLoaded = ({children}) => {
  const auth = useSelector(state => state.firebase.auth)
  if(!isLoaded(auth)) return <div className="center">Loading...</div>
  return children
}

ReactDOM.render(
  <React.StrictMode>
    <Provider store = {store}>
      <ReactReduxFirebaseProvider {...rrfProps}>
        <AuthIsLoaded>
          <App />
        </AuthIsLoaded>
      </ReactReduxFirebaseProvider>
      </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();

// ReactDOM.render(
// <Provider store={store}>
//   <ReactReduxFirebaseProvider 
//     firebase={firebase}
//     config={fbConfig}
//     dispatch={store.dispatch}
//     createFirestoreInstance={createFirestoreInstance}>
//     <React.StrictMode>
//   <App />
//   </React.StrictMode>
//   </ReactReduxFirebaseProvider>
//   </Provider>,
//   document.getElementById('root')
//   );

//   serviceWorker.unregister();
