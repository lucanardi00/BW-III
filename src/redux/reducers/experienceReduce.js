import {
  GET_EXPERIENCE_ID,
  IS_ERROR,
  IS_LOADING,
} from "../actions/experienceActions";
("GET_EXPERIENCE_ID");

const initialState = {
  expereince: [],
  loading: false,
  error: false,
};

const expereinceReduce = (state = initialState, action) => {
  switch (action.type) {
    case GET_EXPERIENCE_ID:
      return {
        ...state,
        expereince: action.payload,
      };
    case IS_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    case IS_LOADING:
      return {
        ...state,
        loading: action.payload,
      };
    default:
      return state;
  }
};

export default expereinceReduce;
