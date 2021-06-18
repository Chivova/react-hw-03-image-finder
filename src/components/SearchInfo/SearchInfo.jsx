import { Component } from 'react';
import PropTypes from 'prop-types';
import Loader from 'react-loader-spinner';

import imgApi from '../../api/img-api';
import ImageGallery from '../ImageGallery';
import Button from '../Button';

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

class SearchInfo extends Component {
  state = {
    gallery: [],
    page: 1,
    loading: false,
    error: null,
  };

  componentDidUpdate(prevProps, prevState) {
    const prevQuery = prevProps.imageQuery;
    const nextQuery = this.props.imageQuery;
    const prevPage = prevState.page;
    const nextPage = this.state.page;

    if (prevQuery !== nextQuery) {
      this.setState({ gallery: [], page: 1, loading: true, error: null });

      imgApi
        .fetchImgApi(nextQuery)
        .then(gallery => {
          if (gallery.length === 0) {
            this.setState({
              error: `No images found on your request ${nextQuery}`,
            });
          }
          this.setState({
            gallery,
          });
        })
        .finally(() => this.setState({ loading: false }));
    }

    if (prevPage < nextPage) {
      this.setState({ loading: true });
      imgApi
        .fetchImgApi(nextQuery, nextPage)
        .then(gallery => {
          this.setState(prevState => ({
            gallery: [...prevState.gallery, ...gallery],
          }));
        })
        .finally(() => {
          this.scroll();
          this.setState({ loading: false });
        });
    }
  }

  updatePage = () => {
    this.setState(({ page }) => ({
      page: page + 1,
    }));
  };

  scroll = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });
  };

  render() {
    const { gallery, error, loading } = this.state;

    return (
      <div>
        {error && <h2>{error}</h2>}
        <ImageGallery gallery={gallery} />
        {loading && (
          <Loader type="Puff" color="#00BFFF" height={50} width={50} />
        )}
        {gallery.length > 1 && <Button onClick={this.updatePage} />}
      </div>
    );
  }
}
SearchInfo.propTypes = {
  imageQuery: PropTypes.string.isRequired,
};
export default SearchInfo;
