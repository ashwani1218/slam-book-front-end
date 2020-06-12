export const addUser = ({
  firstname = "",
  lastname = "",
  username = "",
  token = "",
} = {}) => ({
  type: "ADD_USER",
  user: {
    firstname,
    lastname,
    username,
    token,
  },
});

export const logout = () => ({
  type: "LOGOUT",
});
