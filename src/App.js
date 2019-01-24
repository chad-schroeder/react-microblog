import React, { Component } from 'react';
import Routes from './Routes';
import './App.css';
import NavBox from './components/NavBox/NavBox';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [
        {
          id: 1,
          title: 'test1',
          description: 'test desc',
          body: 'test body',
          comments: ['hello', 'goodbye']
        },
        {
          id: 2,
          title: 'test2',
          description: 'test desc',
          body: 'test body',
          comments: []
        }
      ],
      postCounter: 3
    };

    this.addPost = this.addPost.bind(this);
    this.deletePost = this.deletePost.bind(this);
  }

  addPost(data) {
    const post = { ...data, id: this.state.postCounter };

    this.setState(state => ({
      posts: [...state.posts, post],
      postCounter: state.postCounter + 1
    }));
  }

  deletePost(id) {
    this.setState(state => ({
      posts: state.posts.filter(post => post.id !== id)
    }));
  }

  deleteComment(id, text) {
    this.setState(state => ({
      posts: state.posts.map(post => {
        if (post.id === id) {
          post.comments.filter(comment => comment !== text);
        }
        return post;
      })
    }));
  }

  render() {
    return (
      <main className="container my-3">
        <NavBox />
        <Routes
          addPost={this.addPost}
          deletePost={this.deletePost}
          deleteComment={this.deleteComment}
          {...this.state}
        />
      </main>
    );
  }
}

export default App;
