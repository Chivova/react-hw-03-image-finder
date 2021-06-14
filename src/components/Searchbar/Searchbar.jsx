import { Component } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
    const { value } = this.state;

    return (
      <header className="Searchbar">
        <form onSubmit={this.handleSubmit} className="SearchForm">
          <button type="submit" className="SearchForm-button">
            <span className="SearchForm-button-label">Search</span>
          </button>

          <input
            onChange={this.handleSearchQuery}
            className="SearchForm-input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={value}
          />
        </form>
      </header>
    );
  }
}

export default Searchbar;
