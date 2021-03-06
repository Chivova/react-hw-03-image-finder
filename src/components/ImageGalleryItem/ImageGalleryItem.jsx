import { Component } from 'react';
import PropTypes from 'prop-types';
import s from './ImageGalleryItem.module.css';

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
    const { webformatURL, largeImageURL, tags } = this.props;

    return (
      <li className={s.imageGalleryItem}>
        <img
          onClick={this.toggleModal}
          src={webformatURL}
          alt={tags}
          className={s.imageGalleryItemImage}
        />
        {this.state.showModal && (
          <Modal
            largeImageURL={largeImageURL}
            tags={tags}
            onClose={this.toggleModal}
          />
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
