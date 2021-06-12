import { Component, Fragment } from 'react';
import Searchbar from './components/Searchbar';
import SearchInfo from './components/SearchInfo';
import 'modern-normalize/modern-normalize.css';

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
