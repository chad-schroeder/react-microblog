import React, { Component } from 'react';
import PostCard from '../../components/PostCard/PostCard';
import { connect } from 'react-redux';

class TitleListContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    console.log('TitleListContainer ', this.props);

    return (
      <div className="TitleList">
        <ul className="list-group list-group-flush">POST CARDS</ul>

        {Object.entries(this.props.posts).map(post => (
          <PostCard
            value={Object.values(post)[1]}
            id={Object.values(post)[0]}
          />
        ))}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    posts: state.posts
  };
}
export default connect(mapStateToProps)(TitleListContainer);

// {Object.entries(posts.posts).forEach(([key, val]) => {
//   <PostCard values={val} />;
// })}
