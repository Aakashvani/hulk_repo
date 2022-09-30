import * as types from "./actionType";

const initialData = {
  data: [],
};

const reducer = (state = initialData, action) => {
  const { type, payload } = action;
  switch (type) {
    case types.SUCCESS: {
      return {
        ...state,
        data: [...payload],
      };
    }
    default:
      return state;
  }
};

export default reducer;
