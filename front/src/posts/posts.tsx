import * as React from 'react';
import { connect } from 'react-redux';
import { PostItem, State } from "../store";
import Post from "./post";

class Posts extends React.Component<PostsProps > {
    constructor(props: PostsProps){
        super(props);

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
}

function mapStateToProps(state: State) {
    return state;
}

function mapDispatchToProps() {
}

interface PostsProps {
    posts: PostItem[]
    fetchingPosts: boolean
}

export default connect(mapStateToProps)(Posts);
