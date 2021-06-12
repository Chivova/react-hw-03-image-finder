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
      this.setState({ loading: true });

      imgApi
        .fetchImgApi(nextQuery)
        .then(gallery => this.setState({ gallery }))
        .catch(function (error) {
          if (error.response) {
            this.setState({ error: error.status });
          }
        })
        .finally(() => this.setState({ loading: false }));
    }
    console.log(this.state.error);
  }

  render() {
    const { gallery, loading } = this.state;

    return (
      <div>
        {this.state.error && <p>askljsalkdjaslkdj</p>}
        {loading && <p>Load......</p>}
        <ImageGallery gallery={gallery} />
      </div>
    );
  }
}
export default SearchInfo;
