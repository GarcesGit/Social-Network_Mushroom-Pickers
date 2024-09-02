import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const posts = [
    { id: 1, post: "Yesterday I saw ducks", likesCount: 3 },
    { id: 2, post: "They were fat and nice", likesCount: 5 },
    { id: 3, post: "Today I saw him", likesCount: 7 },
    { id: 4, post: "The man was more respectable", likesCount: 9 },
];

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <App posts={posts} />
    </React.StrictMode>
);

reportWebVitals();
