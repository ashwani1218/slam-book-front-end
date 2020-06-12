import React from "react";
import "./styles/styles.scss";
import AppRouter from "./Routers/AppRouter";
import { Provider } from "react-redux";
import configureStore from "./redux/store/ConfigureStore";

const store = configureStore();
class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Provider store={store}>
          <AppRouter />
        </Provider>
      </div>
    );
  }
}

export default App;
