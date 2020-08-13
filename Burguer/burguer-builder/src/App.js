import React, { Component } from 'react';
import Layout from './components/Layout/Layout';
import BurguerBilder from '../src/containers/BurguerBilder/BurguerBilder'

class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <BurguerBilder/>
        </Layout>
      </div>
    );
  }
}

export default App;
