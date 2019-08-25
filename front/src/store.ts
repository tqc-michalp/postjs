import { createStore, Action } from 'redux';
import * as actions from './actions';

function reducer (state: State, action: any){
    switch (action.type) {
        case actions.REQUEST_POSTS:
            return {
                ...state,
                fetchingPosts: true,
            };
            
        case actions.RECEIVED_POSTS:
            return {
                ...state,
                fetchingPosts: false,
                posts: action.posts 
            }
    }
    return state;
}

const preloadedState = {
    // posts: [
    //     {
    //         title: 'Terminator',
    //         content: 'test qwerty',
    //         date: '2019-08-03 12:00:00 CEST'

    //     }
    // ]
    posts: [],
    fetchingPosts: true
};

export interface State {
    posts: PostItem[]
    fetchingPosts: boolean
}
export interface PostItem {
    title: string
    content: string
    date: string
}

export const store = createStore(reducer, preloadedState);

// case 1
export default store;

// case 2
// export const store;

// case 3
// export = store;
