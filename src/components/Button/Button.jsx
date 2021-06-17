import PropTypes from 'prop-types';
import s from './Button.module.css';

const Button = ({ onClick }) => (
  <button className={s.button} onClick={onClick} type="button">
    Load More
  </button>
);
Button.propTypes = {
  onClick: PropTypes.func.isRequired,
};
export default Button;
