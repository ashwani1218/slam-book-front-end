import React from "react";
import "./styles/styles.scss";
import AppRouter from "./Routers/AppRouter";

class App extends React.Component {
  render() {
    return (
      <div>
        <AppRouter />
      </div>
    );
  }
}

export default App;
