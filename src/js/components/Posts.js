import React from 'react';
import Post from '../components/Post';
import AddPost from './AddPost';
import Header from '../components/Header';
import { addPost, showPost } from '../actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
const mapStateToProps = state => ({state});
const mapDispatchToProps = dispatch => ( bindActionCreators({ addPost, showPost }, dispatch) );
@connect(mapStateToProps, mapDispatchToProps)
export default class Posts extends React.Component {
    renderPosts() {
        if(this.props.state.posts) {
            return this.props.state.posts.map((item, index) => {
                return (
                    <Post data={item} key={index} index={index} push={this.props.history.push} />
                )
            })
        } else {
            return <p>Empty yet, or someting was wrong.</p>
        }
    }
    render() {
        return (
            <section className="posts-container">
                <Header />
                <AddPost addPost = {this.props.addPost} showPost = {this.props.showPost} postIndex = {this.props.state.show}/>
                <div className="items">
                    {this.renderPosts()}
                </div>
            </section>
        )
    }
}

