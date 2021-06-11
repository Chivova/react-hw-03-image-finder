import { Component, Fragment } from 'react';
// import imgApi from './api/img-api';
import 'modern-normalize/modern-normalize.css';
import Searchbar from './components/Searchbar';
import SearchInfo from './components/SearchInfo';

class App extends Component {
  state = {
    imageQuery: '',
  };

  handleFormSubmit = imageQuery => {
    this.setState({ imageQuery });
  };

  render() {
    const { imageQuery } = this.state;

    return (
      <Fragment>
        <Searchbar onSubmit={this.handleFormSubmit} />
        <SearchInfo imageQuery={imageQuery} />
      </Fragment>
    );
  }
}
export default App;
