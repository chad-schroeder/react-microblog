import React, { Component } from 'react';
import Routes from './Routes';
import './App.css';
import NavBox from './components/NavBox/NavBox';

class App extends Component {
  render() {
    return (
      <>
        <header>
          <NavBox />
        </header>
        <main className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-md-10 col-lg-8">
              <Routes {...this.state} />
            </div>
          </div>
        </main>
      </>
    );
  }
}

export default App;
