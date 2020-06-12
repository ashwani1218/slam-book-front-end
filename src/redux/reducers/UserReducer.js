//User Reducer

const UserReducerDefaultState = {
  user: {
    firstname: "",
    lastname: "",
    username: "",
    token: "",
  },
}; //Setting Default State

export default (state = UserReducerDefaultState, action) => {
  switch (action.type) {
    case "ADD_USER":
      return { user: action.user };

    case "LOGOUT":
      return { user: { firstname: "", lastname: "", username: "", token: "" } };

    case "GET_USER":
      return [...state];

    default:
      return state;
  }
};
