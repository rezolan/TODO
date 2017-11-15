import * as types from '../constants/ActionTypes';

// Actions here
export const addPost = (payload) => ({type: types.ADD_POST, payload});
export const updatePost = (payload) => ({type: types.UPDATE_POST, payload});
export const showPost = (payload) => ({type: types.SHOW_POST, payload});
export const deletePost = (payload) => ({type: types.DELETE_POST, payload});
export const initialData = (payload) => ({type: types.INITIAL_DATA, payload});
