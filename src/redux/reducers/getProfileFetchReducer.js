import { GET_ALL_PROFILE, GET_PROFILE_ID } from "../actions";

const initialState = {
  profile: [],
  allProfile: [],
};

const getProfileFetchReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PROFILE_ID:
      return {
        ...state,
        profile: action.payload,
      };
    case GET_ALL_PROFILE:
      return {
        ...state,
        allProfile: action.payload,
      };
    default:
      return state;
  }
};

export default getProfileFetchReducer;
