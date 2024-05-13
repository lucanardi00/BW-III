import { GET_PROFILE_ID } from "../actions";

const initialState = {
  profile: [],
};

const getProfileFetchReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PROFILE_ID:
      return {
        ...state,
        profile: action.payload,
      };
    default:
      return state;
  }
};

export default getProfileFetchReducer