//User Reducer

const UserReducerDefaultState = {}; //Setting Default State

export default (state = UserReducerDefaultState, action) => {
  switch (action.type) {
    case "ADD_USER":
      return { user: action.user };

    case "GET_USER":
      return [...state];

    default:
      return state;
  }
};
