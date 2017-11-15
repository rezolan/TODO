import React from 'react';
import Posts from '../components/Posts';
import PostView from '../components/PostView';
import { Route, Switch } from 'react-router-dom';
import EditPost from "../components/EditPost";
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {initialData} from "../actions/index";
import { BrowserRouter as Router } from 'react-router-dom';

const mapStateToProps = state => ({store:state});
const mapDispatchToProps = dispatch => (bindActionCreators({initialData}, dispatch));

@connect(mapStateToProps,mapDispatchToProps)
export default class MainLayout extends React.Component {
    state = {load:false};

    componentWillMount(){
        let self = this;
        let myInit = { method: 'POST', body:'123'};
        fetch('/xxx', myInit).then(function(response) {
            return response.json();
        }).then(function(myData) {
            console.log(myData.body);
            self.props.initialData( myData.body);
        });
    }
    componentDidMount(){
        // if(localStorage.getItem('red') == null){
        //     localStorage.setItem('red', true);
        //     window.location.pathname = '/';
        // }
    }

    render() {
        return (
            <div className="wrapper">
                <Router>
                    <Switch>
                        <Route exact path="/" component={Posts}/>
                        <Route path='/updatePost-:id' component = {EditPost}/>
                        <Route path='/post-:postId' component = {PostView}/>
                        <Route render={() => <div>Page Not Found</div>}/>
                    </Switch>
                </Router>
            </div>
        );
    }
}

