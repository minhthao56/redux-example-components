import { RANDOM_CHANGE_COLOR } from "../constants/changeColors";

export const doChangeRadomColor = (value) => (dispatch) => {
  dispatch({
    type: RANDOM_CHANGE_COLOR,
    payload: value,
  });
};
