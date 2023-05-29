import { CALC_ACTIONS } from "../actions";

export default function OperationButton({ dispatch, operation }) {
  return (
    <button
      onClick={() =>
        dispatch({
          type: CALC_ACTIONS.CHOOSE_OPERATION,
          payload: { operation },
        })
      }
    >
      {operation}
    </button>
  );
}
