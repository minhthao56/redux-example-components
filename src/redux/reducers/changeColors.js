import { RANDOM_CHANGE_COLOR } from "../constants/changeColors";

const initialState = {
  color: "#663398",
  ortherState: "test",
};

const reducers = (state = initialState, action) => {
  switch (action.type) {
    case RANDOM_CHANGE_COLOR:
      return {
        ...state,
        color: action.payload,
      };

    default:
      return state;
  }
};

export default reducers;
