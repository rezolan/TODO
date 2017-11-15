import InitialState from '../constants/InitialState';
import * as types from '../constants/ActionTypes';
export default function posts(state = InitialState, action) {
    switch(action.type) {
        case types.ADD_POST:
            return {...state, posts:[action.payload, ...state.posts]};
        case types.UPDATE_POST:
            return {...state, posts:state.posts.map((item,index)=>{
                if(index == action.payload.index){
                    return {...item, ...action.payload.new_post}
                }else{
                    return item;
                }
            })};
        case types.SHOW_POST:
            return {...state, show:action.payload};
        case types.DELETE_POST:
            return {...state, posts:state.posts.filter((item,index)=> {
                if(index != action.payload){
                    return item;
                }
            })};
        case types.INITIAL_DATA:
            return action.payload;
        default:
            return state;
    }
};