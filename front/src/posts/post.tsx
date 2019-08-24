import * as React from 'react';
import { connect } from "react-redux";
import { State } from "../store";

class Post extends React.Component<PostProps> {
    render() {
        return (
            <li>
                <h3>Title: {this.props.title}</h3>
                <p>Content: {this.props.content}</p>
                <p>Date: {this.props.date}</p>
            </li>
        );
    }
}

function mapStateToProps(state: State, ownProps: PostExternalProps) {
    return state.posts[ownProps.index];
}

function mapDispatchToProps() {

}

interface PostProps {
    title: string
    content: string
    date: string
}

interface PostExternalProps {
    index: number
}

// inject additional props from Redux
export default connect(mapStateToProps)(Post);
