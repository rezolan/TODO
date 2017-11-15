import React from 'react';
import ReactDOM from 'react-dom';
import '../sass/common.scss';
import MainLayout from "./containers/MainLayout";
import {Provider} from 'react-redux';
import store from './store';
ReactDOM.render(
    <Provider store={store}>
            <MainLayout />
    </Provider>
    , document.getElementById('app'));


