import { createStore } from 'redux';

function reducer (state: State, action: any){
    switch (action.type) {

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
