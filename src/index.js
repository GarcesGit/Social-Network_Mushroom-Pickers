import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import store from "./redux/state";

const root = ReactDOM.createRoot(document.getElementById("root"));

const rerenderEntireTree = (state) => {
    root.render(
        <React.StrictMode>
            <App
                state={store.getState()}
                addPost={store.addPost}
                updateNewPostText={store.updateNewPostText}
            />
        </React.StrictMode>
    );
};
rerenderEntireTree(store.getState());
store.subscribe(rerenderEntireTree);

reportWebVitals();
