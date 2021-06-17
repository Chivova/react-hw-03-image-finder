import { Component } from 'react';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import s from './Searchbar.module.css';

class Searchbar extends Component {
  state = {
    query: '',
  };

  handleSearchQuery = e => {
    const { value } = e.currentTarget;

    this.setState({ query: value });
  };

  handleSubmit = e => {
    e.preventDefault();

    const imageQuery = this.state.query;

    if (imageQuery.trim() === '') {
      toast.warn('🦄 Сheck if the input is correct!', {
        position: 'top-right',
        autoClose: 3000,
      });

      return;
    }

    this.props.onSubmit(imageQuery);
    this.setState({ query: '' });
  };

  render() {
    const { query } = this.state;

    return (
      <header className={s.searchbar}>
        <form onSubmit={this.handleSubmit} className={s.searchForm}>
          <button type="submit" className={s.searchFormButton}>
            <span className={s.searchFormButtonLabel}>Search</span>
          </button>

          <input
            onChange={this.handleSearchQuery}
            className={s.searchFormInput}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={query}
          />
        </form>
      </header>
    );
  }
}
Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default Searchbar;
