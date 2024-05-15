import {
  GET_EXPERIENCE_ID,
  IS_ERROR,
  IS_LOADING,
  POST_EXPERIENCE,
} from "../actions/experienceActions";
import { DELETE_DETAILS_EXPERIENCE } from "../actions/experienceDetails";
("GET_EXPERIENCE_ID");

const initialState = {
  expereince: [],
  loading: false,
  error: false,
  newExp: [
    {
      _id: "",
      role: "",
      company: "",
      startDate: "",
      endDate: "",
      description: "",
      area: "",
    },
  ],
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
    case POST_EXPERIENCE:
      return {
        ...state,
        loading: action.payload,
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

export default expereinceReduce;
