import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
// import PostForm from './components/PostForm/PostForm';
import NewPostContainer from './containers/NewPost/NewPostContainer';
import PostContainer from './containers/Post/PostContainer';
// import TitleListContainer from './containers/TitleList/TitleListContainer';
import Home from './components/Home/Home';

class Routes extends Component {
  render() {
    console.log(
      'In Routes, getPost, this.props is',
      this.props,
      'this.state is ',
      this.state
    );

    return (
      <Switch>
        <Route exact path="/" render={() => <Home {...this.state} />} />
        <Route
          exact
          path="/new"
          render={props => (
            <NewPostContainer
              title="New Post"
              fields={{ title: '', body: '', description: '' }}
              addPost={this.props.addPost}
              {...props}
            />
          )}
        />
        {/* <Route exact path="/:id" render={this.post} /> */}
        <Route
          exact
          path="/:id"
          render={props => <PostContainer {...props} {...this.state} />}
        />
        <Redirect to="/" />
      </Switch>
    );
  }
}

export default Routes;
