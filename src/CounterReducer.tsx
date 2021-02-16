import React, { Dispatch, Reducer, useReducer } from "react";

type Action = {
  count: number;
  type: ActionType;
};

enum ActionType {
  PLUS,
  MINUS
}

function reducer(prevState: number, action: Action): number | 0 {
  switch (action.type) {
    case ActionType.PLUS:
      return prevState + 1;
    case ActionType.MINUS:
      return prevState - 1;
    default:
      return 0;
  }
}

function CounterReducer() {
  const [state, dispatch]: Reducer<number, Action> = useReducer(reducer, 0);

  const onPlus = () => {
    dispatch({ type: ActionType.PLUS });
  };

  const onMinus = () => {
    dispatch({ type: ActionType.MINUS });
  };

  return (
    <div>
      <h1>Counter by reducer {state}</h1>
      <button type="button" onClick={onPlus}>
        +
      </button>
      <button type="button" onClick={onMinus}>
        -
      </button>
    </div>
  );
}

export default CounterReducer;
