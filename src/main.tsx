import React from "react";
import { Provider } from "react-redux";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { BrowserRouter as Router } from "react-router-dom";
import ReactError from "./components/ReactError.tsx";
import store from "./store.ts";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <ReactError>
    <Provider store={store}>
      <React.StrictMode>
        <Router>
          <App />
        </Router>
      </React.StrictMode>
    </Provider>
  </ReactError>
);
