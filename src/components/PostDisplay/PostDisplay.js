import React, { PureComponent } from 'react';
import './PostDisplay.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

/** Display a post:
 *
 * - show edit/delete buttons (& call parent on action)
 * - show vote count and +/- buttons (& call parent on action)
 *
 */

class PostDisplay extends PureComponent {
  render() {
    const { title, body, votes } = this.props.post

    return (
      <>
        <article className="Post mb-3 bg-white">
          <div className="p-4">
            <p className="Post-eyebrow mb-0 text-muted text-uppercase">
              Post
            </p>
            <h1 className="mb-3 h2">
              {title}
            </h1>
            <p>{body}</p>
          </div>
          <footer className="d-flex justify-content-between py-2 px-4">
            <div className="btn-group" role="group">
              <button
                className="btn btn-link d-flex justify-content-center px-3 text-primary"
                onClick={() => this.props.toggleEdit()}
              >
                <FontAwesomeIcon icon="edit" />
              </button>
              <button
                className="btn btn-link d-flex justify-content-center text-danger px-3"
                onClick={() => this.props.deletePost()}
              >
                <FontAwesomeIcon icon="times" />
              </button>
            </div>
            <div className="d-flex align-items-center">
              <p className="m-0">
                <strong>{votes}</strong> votes
              </p>
              <div className="btn-group" role="group">
                <button 
                  className="btn btn-link d-flex justify-content-center px-3 text-primary"
                  onClick={() => this.props.doVote("up")}
                >
                  <FontAwesomeIcon icon="thumbs-up" />
                </button>
                <button 
                  className="btn btn-link d-flex justify-content-center text-danger px-3"
                  onClick={() => this.props.doVote("down")}
                >
                  <FontAwesomeIcon icon="thumbs-down" />
                </button>
              </div>
            </div>
          </footer>
        </article>
      </>
    );
  }

}

 export default PostDisplay;
 