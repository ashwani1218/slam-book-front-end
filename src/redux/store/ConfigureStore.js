import { createStore } from "redux";
import UserReducer from "../reducers/UserReducer";

export default () => {
  const store = createStore(
    UserReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

  return store;
};
