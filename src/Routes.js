import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import PostForm from './components/PostForm/PostForm';
import Post from './components/Post/Post';
import Home from './components/Home/Home';

class Routes extends Component {
  render() {
    const getPost = props => {
      const post = this.props.posts.find(
        post => post.id === +props.match.params.id
      );
      return <Post postInfo={post} />;
    };

    return (
      <Switch>
        <Route exact path="/" render={() => <Home />} />
        <Route
          exact
          path="/new"
          render={props => (
            <PostForm
              title="New Post"
              addPost={this.props.addPost}
              {...props}
            />
          )}
        />
        <Route exact path="/:id" render={getPost} />
        <Redirect to="/" />
      </Switch>
    );
  }
}

export default Routes;
