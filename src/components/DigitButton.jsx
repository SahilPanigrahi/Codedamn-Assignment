import { ACTIONS } from '../constant/constants';
import PropTypes from 'prop-types';

const DigitButton = ({ dispatch, digit }) => {
  return (
    <button
      onClick={() => dispatch({ type: ACTIONS.ADD_DIGIT, payload: { digit } })}
    >
      {digit}
    </button>
  );
};

DigitButton.propTypes = {
  dispatch: PropTypes.func.isRequired,
  digit: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};


export default DigitButton;
