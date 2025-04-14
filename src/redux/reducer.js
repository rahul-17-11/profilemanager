import { ADD_USER, DELETE_USER, UPDATE_USER } from "./actions";

const initialState = { profileList: [] };

export const profileReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_USER:
      return {
        ...state,
        profileList: [...state.profileList, payload],
      };
    case UPDATE_USER:
      return {
        ...state,
        profileList: state.profileList.forEach((profile) =>
          profile.id == payload[0] ? (profile = payload[1]) : profile
        ),
      };
    case DELETE_USER:
      return {
        ...state,
        profileList: state.profileList.filter(
          (profile) => profile.id != payload
        ),
      };
    default:
      return state;
  }
};
