import React from "react";
import "./styles/styles.scss";
import AppRouter from "./Routers/AppRouter";
import { Provider } from "react-redux";
import configureStore from "./redux/store/ConfigureStore";

const store = configureStore();
class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <AppRouter />
      </Provider>
    );
  }
}

export default App;
