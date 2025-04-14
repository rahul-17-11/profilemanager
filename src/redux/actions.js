export const ADD_USER = "ADD_USER";
export const UPDATE_USER = "UPDATE_USER";
export const DELETE_USER = "DELETE_USER";

export const addUser = (userData) => {
  return {
    type: ADD_USER,
    payload: userData,
  };
};

export const updateUser = (userData) => {
  return {
    type: UPDATE_USER,
    payload: userData,
  };
};

export const deleteUser = (userId) => {
  return {
    type: DELETE_USER,
    payload: userId,
  };
};
