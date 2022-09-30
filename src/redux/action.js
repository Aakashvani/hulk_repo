import * as type from "./actionType";

const success = (payload) => {
  return {
    type: type.SUCCESS,
    payload,
  };
};

export { success };
