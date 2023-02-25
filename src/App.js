import React from "react";
import "./App.css";
import useTheme from "hooks/useTheme";

const App = () => {
  const { handleToggleTheme } = useTheme();

  return (
    <>
      <div className="row">
        <div className="col-12">
          <div className="App">
            <h1>This app created to change light and dark theme</h1>
            <button onClick={() => handleToggleTheme()}>Change Theme</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
