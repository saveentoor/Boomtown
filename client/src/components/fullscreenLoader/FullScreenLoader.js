import React from 'react';
import Loader from 'react-loader-spinner';
export default class FullScreenLoader extends React.Component {
  render() {
    return <Loader type="Puff" color="#00BFFF" height="100" width="100" />;
  }
}
