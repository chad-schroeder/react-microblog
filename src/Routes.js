import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import PostContainer from './components/Post/Post';
import NewPostContainer from './containers/NewPostContainer';
import HomeContainer from './containers/HomeContainer';

class Routes extends Component {
  render() {
    const getPost = props => {
      const post = this.props.posts.find(
        post => post.id === +props.match.params.id
      );
      return (
        <PostContainer
          postInfo={post}
          addPost={this.props.addPost}
          deletePost={this.props.deletePost}
          addComment={this.props.addComment}
          deleteComment={this.props.deleteComment}
          {...props}
        />
      );
    };

    return (
      <Switch>
        <Route exact path="/" render={() => <HomeContainer />} />
        <Route
          exact
          path="/new"
          render={props => (
            <NewPostContainer
              title="New Post"
              fields={{ title: '', body: '', description: '' }}
              {...props}
            />
          )}
        />
        <Route
          exact
          path="/:id"
          render={props => <PostContainer {...props} />}
        />
        <Redirect to="/" />
      </Switch>
    );
  }
}

export default Routes;
