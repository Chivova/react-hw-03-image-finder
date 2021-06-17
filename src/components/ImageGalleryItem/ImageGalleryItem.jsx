import { Component } from 'react';
import PropTypes from 'prop-types';

import Modal from '../Modal';

class ImageGalleryItem extends Component {
  state = {
    showModal: false,
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  render() {
    const { webformatURL, largeImageURL } = this.props;

    return (
      <li className="ImageGalleryItem">
        <img
          onClick={this.toggleModal}
          src={webformatURL}
          alt=""
          className="ImageGalleryItem-image"
        />
        {this.state.showModal && (
          <Modal largeImageURL={largeImageURL} onClose={this.toggleModal} />
        )}
      </li>
    );
  }
}

ImageGalleryItem.propTypes = {
  webformatURL: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
};
export default ImageGalleryItem;
