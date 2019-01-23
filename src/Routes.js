import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import PostForm from './components/PostForm/PostForm';
import Home from './components/Home/Home';

class Routes extends Component {
  render() {
    console.log(this.props);

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
        <Redirect to="/" />
      </Switch>
    );
  }
}

export default Routes;
