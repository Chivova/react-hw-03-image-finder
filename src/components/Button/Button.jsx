import PropTypes from 'prop-types';

const Button = ({ onClick }) => (
  <button onClick={onClick} type="button">
    Load More
  </button>
);
Button.propTypes = {
  onClick: PropTypes.func.isRequired,
};
export default Button;
