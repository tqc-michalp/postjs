import * as React from 'react';
import { connect } from 'react-redux';
import { PostItem, State } from "../store";
import Post from "./post";
import * as actions from '../actions';
import { Dispatch } from 'redux';

class Posts extends React.Component<PostsProps > {
    constructor(props: PostsProps){
        super(props);
        this.props.requestPosts();

        this.fetchPosts();
    }
    render() {
        if(this.props.fetchingPosts){
            return (
                <div className="">
                    <h3>Loading</h3>
                </div>
            );
        }
        return (
            <div>
                <ul>
                    {this.props.posts.map( (value, index) => <Post key={index} index={index} />)}
                </ul>
            </div>
        );
    }
    async fetchPosts(){
        fetch('/posts')
    };
}



function mapStateToProps(state: State) {
    return state;
}

function mapDispatchToProps(dispatch: Dispatch) {
    return {
        requestPosts: () => dispatch(actions.requestPosts()),
        receivedPosts: () => dispatch(actions.receivedPosts()),
    };
}

interface PostsProps {
    posts: PostItem[];
    fetchingPosts: boolean;
    requestPosts: () => any;
    receivedPosts: () => any;
}

export default connect(mapStateToProps, mapDispatchToProps)(Posts);
