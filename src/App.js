import React, { Component } from 'react';
import Routes from './Routes';
import './App.css';
import NavBox from './components/NavBox/NavBox';
const uuid = require('uuid/v4');

class App extends Component {
  constructor(props) {
    super(props);

    this.addPost = this.addPost.bind(this);
    this.deletePost = this.deletePost.bind(this);
    this.addComment = this.addComment.bind(this);
    this.deleteComment = this.deleteComment.bind(this);
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

  addComment(post_id, comment) {
    const post = this.state.posts.find(post => post.id === post_id);
    const comments = [...post.comments, { id: uuid(), text: comment }];

    this.setState(state => ({
      posts: this.state.posts.map(p => {
        if (p.id === post.id) {
          return { ...post, comments };
        }
        return p;
      })
    }));
  }

  deleteComment(post_id, comment_id) {
    const post = this.state.posts.find(post => post.id === post_id);
    const comments = post.comments.filter(comment => comment.id !== comment_id);

    this.setState(state => ({
      posts: this.state.posts.map(p => {
        if (p.id === post.id) {
          return { ...post, comments };
        }
        return p;
      })
    }));
  }

  render() {
    return (
      <>
        <header>
          <NavBox />
        </header>
        <main className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-md-10 col-lg-8">
              <Routes
                addPost={this.addPost}
                deletePost={this.deletePost}
                addComment={this.addComment}
                deleteComment={this.deleteComment}
                {...this.state}
              />
            </div>
          </div>
        </main>
      </>
    );
  }
}

export default App;
