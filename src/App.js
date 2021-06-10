import { Component } from 'react';
import imgApi from './api/img-api';
import 'modern-normalize/modern-normalize.css';

class App extends Component {
  componentDidMount() {
    console.log(imgApi.fetchImgApi());
  }
  render() {
    return <div></div>;
  }
}
export default App;
