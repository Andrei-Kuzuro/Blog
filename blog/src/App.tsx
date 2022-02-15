import React, { useState } from "react";
import "./App.css";
import { RootRouter } from "./navigation/RootRouter";
import { createContext } from "react";

export const Context = createContext({ isDark: false });

function App() {
  const [isDark, setIsDark] = useState(false);

  const changeIsDark = () => {
    setIsDark((isDark) => !isDark);
  };
  return (
    <Context.Provider value={{ isDark }}>
      <div className="App">
        <RootRouter />
      </div>
    </Context.Provider>
  );
}

export default App;
