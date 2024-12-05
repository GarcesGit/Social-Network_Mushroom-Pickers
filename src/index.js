import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import store from "./redux/state";

const root = ReactDOM.createRoot(document.getElementById("root"));

let rerenderEntireTree = (state) => {
    root.render(
        <React.StrictMode>
            <App
                state={store.state}
                addPost={store.addPost}
                updateNewPostText={store.updateNewPostText}
            />
        </React.StrictMode>
    );
};
rerenderEntireTree(store.state);
store.subscribe(rerenderEntireTree);

reportWebVitals();
