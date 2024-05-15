import {
  GET_DETAILS_EXPERIENCE,
  MOD_DETAILS_EXPERIENCE,
  DELETE_DETAILS_EXPERIENCE,
} from "../actions/experienceDetails";

const initialState = {
  details: [],
};

const experienceDetailsReducers = (state = initialState, action) => {
  switch (action.type) {
    case GET_DETAILS_EXPERIENCE:
      return {
        ...state,
        details: action.payload,
      };
    case MOD_DETAILS_EXPERIENCE:
      return {
        ...state,
        details: action.payload,
      };
    case DELETE_DETAILS_EXPERIENCE:
      return {
        ...state,
        details: action.payload,
      };
    default:
      return state;
  }
};

export default experienceDetailsReducers;
