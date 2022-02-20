import React, { useState } from "react";
import "./App.css";
import { RootRouter } from "./navigation/RootRouter";
import { createContext } from "react";
import { Provider } from "react-redux";
import { store } from "./components/redux/store";

export const Context = createContext({ isDark: false });

function App() {
  const [isDark, setIsDark] = useState(false);

  const changeIsDark = () => {
    setIsDark((isDark) => !isDark);
  };
  return (
    <Provider store={store}>
      <Context.Provider value={{ isDark }}>
        <div className="App">
          <RootRouter />
        </div>
      </Context.Provider>
    </Provider>
  );
}

export default App;
