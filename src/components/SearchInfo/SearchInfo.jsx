import { Component } from 'react';
import imgApi from '../../api/img-api';
import ImageGallery from '../ImageGallery';

class SearchInfo extends Component {
  state = {
    gallery: [],
    loading: false,
    error: null,
  };
  componentDidUpdate(prevProps, prevState) {
    const prevQuery = prevProps.imageQuery;
    const nextQuery = this.props.imageQuery;

    if (prevQuery !== nextQuery) {
      this.setState({ loading: true, gallery: [] });

      imgApi
        .fetchImgApi(nextQuery)
        .then(gallery => {
          if (gallery.length === 0) {
            // return Promise.reject(error.response);
            this.setState({
              error: `No images found on your request ${nextQuery}`,
            });
          }
          this.setState({ gallery });
        })
        .finally(() => this.setState({ loading: false }));
    }
  }

  render() {
    const { gallery, error, loading } = this.state;

    return (
      <div>
        {error && <h2>{error}</h2>}
        {loading && <p>Load......</p>}
        <ImageGallery gallery={gallery} />
      </div>
    );
  }
}
export default SearchInfo;
