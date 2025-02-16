import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import store from "./redux/reduxStore";
import reportWebVitals from "./reportWebVitals";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

const rerenderEntireTree = (state) => {
    root.render(
        <React.StrictMode>
            <App state={state} dispatch={store.dispatch.bind(store)} />
        </React.StrictMode>
    );
};
rerenderEntireTree(store.getState());

store.subscribe(() => {
    let state = store.getState();
    rerenderEntireTree(state);
});

reportWebVitals();
