import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {showPost, deletePost} from '../actions';

const mapStateToProps = state => ({showDecision:state.show});
const mapDispatchToProps = dispatch => (bindActionCreators({showPost,deletePost},dispatch));

String.prototype.lessThan = function (max) {
    let tmp = this;
    for(let i = this.length; i >= max; i--) {
        tmp = tmp.slice(0, -1);
    }
    return tmp;
};

@connect(mapStateToProps,mapDispatchToProps)
export default class Post extends React.Component {
    constructor(props) {
        super(props);
        this.state ={
            showItem:this.props.showDecision != this.props.index
        };
        this.handleShowMore = this.handleShowMore.bind(this);    
        this.handleView = this.handleView.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
    }
    handleShowMore() {
        if(this.props.showDecision != this.props.index){
            this.props.showPost(this.props.index);
        }
        else{
            this.props.showPost(null);
        }
    };
    contentView = (content) => {
        if(this.props.showDecision != this.props.index && content.length > 120) {
            return content.lessThan(120) + '... ';
        } else {
            return content;
        }
    };
    handleView() {
        this.props.push(`/post-${this.props.index}`)
    }
    handleDelete(){
        if(this.props.showDecision == this.props.index){
            this.props.showPost(null);
        }
        this.props.deletePost(this.props.index);
    }
    render() {
        return (
            <article className={this.props.showDecision != this.props.index ? "item" : "item active"}>
                    <h1>{this.props.data.title}</h1>
                    <p>{this.contentView(this.props.data.description)}</p>
                    <ul className="links">
                        {(this.props.data.links) ? this.props.data.links.map((item, index) =>
                            <li key={index} className="link"><a href={item.link} target="_blank">{item.title}</a></li>) : null}
                    </ul>
                    <div className="buttons">
                        <button  onClick={this.handleShowMore}>{this.props.showDecision != this.props.index ? "Show more" : "Show less"}</button>
                        <button onClick={this.handleDelete}>Delete</button>
                        <button><Link to = {`/updatePost-${this.props.index}`}>Edit</Link></button>
                        <button onClick={this.handleView}>View</button>
                    </div>
            </article>
        );
    }
}

