import { CALC_ACTIONS } from "../actions";

export default function DigitButton({ dispatch, digit }) {
  return (
    <button
      onClick={() =>
        dispatch({ type: CALC_ACTIONS.ADD_DIGIT, payload: { digit } })
      }
    >
      {digit}
    </button>
  );
}
