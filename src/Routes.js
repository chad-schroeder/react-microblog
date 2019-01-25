import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
// import PostForm from './components/PostForm/PostForm';
import NewPostContainer from './containers/NewPost/NewPostContainer';
import PostContainer from './containers/Post/PostContainer';
import TitleListContainer from './containers/TitleList/TitleListContainer';
import Home from './components/Home/Home';

class Routes extends Component {
  render() {
    // const getPost = props => {
    //   const post = this.props.posts.find(
    //     post => post.id === +props.match.params.id
    //   );
    //   return (
    // <PostContainer
    //   postInfo={post}
    //   addPost={this.props.addPost}
    //   deletePost={this.props.deletePost}
    //   addComment={this.props.addComment}
    //   deleteComment={this.props.deleteComment}
    //   {...props}
    // />
    // );
    // };

    return (
      <Switch>
        <Route exact path="/" render={() => <Home {...this.props} />} />
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
        {/* <Route exact path="/:id" render={getPost} /> */}
        <Redirect to="/" />
      </Switch>
    );
  }
}

export default Routes;
