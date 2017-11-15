import React from 'react';
import Notify from '../components/Notify';
export default class AddPost extends React.Component {
    constructor(props) {
        super(props);
        this.handleOnSubmit = this.handleOnSubmit.bind(this);
        this.state = {
            notify:false
        }
    }
    handleOnSubmit(event) {
        event.preventDefault();
        if(this.refs.title.value.trim() !== '' || this.refs.description.value.trim() !== '') {
            let new_post = {
                title: this.refs.title.value,
                description: this.refs.description.value
            };
            this.props.addPost(new_post);
            this.refs.title.value = '';
            this.refs.description.value = '';
            this.setState({notify:true});
            if(this.props.postIndex != null){
                this.props.showPost(this.props.postIndex+1);
            }
            setTimeout(()=>this.setState({notify:false}), 2000)
        }
    };
    render() {
        return (
            <div className="add-post">
                <h3>Add new post</h3>
                <form onSubmit={this.handleOnSubmit}>
                    <input type="text" ref="title" placeholder="Post title"/>
                    <textarea ref="description" placeholder="Post content"/>
                    <button type="submit">Создать новый пост</button>
                </form>
                {this.state.notify?<Notify/>:null}
            </div>
        );
    }
}