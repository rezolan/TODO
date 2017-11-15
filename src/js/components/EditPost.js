import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {updatePost} from "../actions/index";
const mapStateToProps = state => ({store:state});
const mapDispatchToProps = dispatch => (bindActionCreators({updatePost}, dispatch));
@connect(mapStateToProps,mapDispatchToProps)
export default class EditPost extends React.Component{
    constructor(props) {
        super(props);
        console.log(this.props);
        this.handleOnSubmit = this.handleOnSubmit.bind(this);
        this.index = this.props.match.params.id;
    }
    handleOnSubmit(event) {
        event.preventDefault();
        if(this.refs.title.value.trim() !== '' || this.refs.description.value.trim() !== '') {
            let new_post = {
                title: this.refs.title.value,
                description: this.refs.description.value
            };
            this.props.updatePost({new_post,index:this.index});
            this.refs.title.value = '';
            this.refs.description.value = '';
            this.props.history.push('/');
        }
    };
    render(){
        console.dir(this.props);
        return (
            <div className="add-post">
                <h3>Update post</h3>
                <form onSubmit={this.handleOnSubmit}>
                    <input type="text" ref="title" placeholder="Post title" defaultValue={this.props.store.posts[this.index].title}/>
                    <textarea ref="description" placeholder="Post content" defaultValue={this.props.store.posts[this.index].description}/>
                    <button type="submit">Редактировать пост</button>
                    <input type="text" ref="linkTitle" placeholder="Link title"/>
                    <input type="text" ref="linkBody" placeholder="Link href"/>
                </form>
            </div>
        );
    }
}