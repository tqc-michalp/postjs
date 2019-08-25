import { PostItem } from "./store";

export const REQUEST_POSTS = 'request_posts';
export const RECEIVED_POSTS = 'received_posts';

export function requestPosts(){
    return {
        type: REQUEST_POSTS,
    };
}

export function receivedPosts(posts: PostItem[]){
    return {
        type: RECEIVED_POSTS,
        posts
    };
}
