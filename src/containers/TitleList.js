import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchTitlesFromAPI } from '../actions/titles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

/** Show list of blog titles, ordered by popularity. */

class TitleList extends Component {
  async componentDidMount() {
    if (!this.props.titles.length) {
      await this.props.fetchTitlesFromAPI();
    }
  }

  vote(direction, id) {
    this.props.sendVoteToAPI(id, direction)
  }

  render() {
    if (!this.props.titles) return <p>Loading...</p>;

    return (
      <ul className="list-group list-group-flush">
        {this.props.titles.map(title => (
          <li key={title.id} className="list-group-item">
            <h4 className="mb-0 h5">
              <Link to={`/${title.id}`} className="text-decoration-none">         {title.title}
              </Link>
            </h4>
            <p className="m-0 text-muted">{ title.description }</p> 
            <div className="d-flex align-items-center">
              <p className="m-0">
                <strong>{ title.votes }</strong> votes
              </p>
              <div className="btn-group" role="group">
                <button 
                  className="btn btn-link d-flex justify-content-center px-3 text-primary" 
                  onClick={() => this.vote("up", title.id)}
                >
                  <FontAwesomeIcon icon="thumbs-up" />
                </button>
                <button 
                  className="btn btn-link d-flex justify-content-center text-danger px-3" 
                  onClick={() => this.vote("down", title.id)}
                >
                  <FontAwesomeIcon icon="thumbs-down" />
                </button>
              </div>
            </div>
          </li>
        ))}
      </ul>
    );
  }
}

function mapStateToProps(state) {
  return {
    titles: state.titles,
  }
}

export default connect(
  mapStateToProps,
  { fetchTitlesFromAPI }
)(TitleList);
