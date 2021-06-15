import { Component } from 'react';
import imgApi from '../../api/img-api';
import ImageGallery from '../ImageGallery';
import Button from '../Button';
import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

class SearchInfo extends Component {
  state = {
    gallery: [],
    page: 1,
    loading: false,
    error: null,
  };
  componentDidUpdate(prevProps, prevState) {
    const { page } = this.state;
    const prevQuery = prevProps.imageQuery;
    const nextQuery = this.props.imageQuery;
    console.log(prevState);

    if (prevQuery !== nextQuery) {
      this.setState({ loading: true, gallery: [] });

      imgApi
        .fetchImgApi(nextQuery, page)
        .then(gallery => {
          if (gallery.length === 0) {
            // return Promise.reject(error.response);
            this.setState({
              error: `No images found on your request ${nextQuery}`,
            });
          }
          this.setState(prevState => ({
            gallery: [...prevState.gallery, ...gallery],
            page: page + 1,
          }));
        })
        .finally(() => this.setState({ loading: false }));
    }
  }

  render() {
    const { gallery, error, loading } = this.state;

    return (
      <div>
        {error && <h2>{error}</h2>}
        {loading && (
          <Loader type="Puff" color="#00BFFF" height={50} width={50} />
        )}
        <ImageGallery gallery={gallery} />
        <Button />
      </div>
    );
  }
}
export default SearchInfo;
