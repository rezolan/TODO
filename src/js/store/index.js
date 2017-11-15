import { createStore, applyMiddleware } from 'redux';
import {createLogger} from 'redux-logger';
import posts from '../reducers/posts.js';

const middleware = applyMiddleware(createLogger());

const store = createStore(posts, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),middleware);
store.subscribe(()=>{
    console.log('subscribe');
    let myInit = { method: 'POST',body: {key : "sdf"}};
    fetch('/log', myInit).then(function(response) {
        console.log('ok');
    });
});

export default store;



