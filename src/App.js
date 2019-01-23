import React, { Component } from 'react';
import Routes from './Routes';
import './App.css';
import NavBox from './components/NavBox/NavBox';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      postCounter: 1
    };

    this.addPost = this.addPost.bind(this);
  }

  addPost(data) {
    const post = { ...data, id: this.state.postCounter };

    this.setState(state => ({
      posts: [...state.posts, post],
      postCounter: state.postCounter + 1
    }));
  }

  render() {
    return (
      <main className="container-fluid my-3">
        <NavBox />
        <Routes addPost={this.addPost} />
      </main>
    );
  }
}

export default App;
