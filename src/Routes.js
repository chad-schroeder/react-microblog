import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import PostContainer from './containers/PostContainer';
import NewPostContainer from './containers/NewPostContainer';
import HomeContainer from './containers/HomeContainer';

class Routes extends Component {
  render() {
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
