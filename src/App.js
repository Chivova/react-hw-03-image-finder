import { Component, Fragment } from 'react';
import { ToastContainer } from 'react-toastify';
import Searchbar from './components/Searchbar';
import SearchInfo from './components/SearchInfo';
import 'modern-normalize/modern-normalize.css';

class App extends Component {
  state = {
    imageQuery: '',
    page: 1,
  };

  handleFormSubmit = imageQuery => {
    this.setState({ imageQuery, page: 1 });
  };

  render() {
    const { imageQuery, page } = this.state;

    return (
      <Fragment>
        <ToastContainer />
        <Searchbar onSubmit={this.handleFormSubmit} />
        <SearchInfo imageQuery={imageQuery} page={page} />
      </Fragment>
    );
  }
}
export default App;
