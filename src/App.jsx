import "./App.css";
import Dialogs from "./pages/dialogs/Dialogs";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Navbar from "./components/navbar/Navbar";
import Profile from "./pages/profile/Profile";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

function App(props) {
    return (
        <BrowserRouter>
            <div className="wrapper">
                <Header />
                <Navbar />
                <main className="main">
                    {/* ////////// */}
                    <Routes>
                        <Route
                            path="/profile"
                            element={
                                <Profile
                                    profileState={props.state.profilePage}
                                    addPost={props.addPost}
                                    updateNewPostText={props.updateNewPostText}
                                />
                            }
                        />
                        <Route
                            path="/dialogs"
                            element={<Dialogs dialogsState={props.state.dialogsPage} />}
                        />
                        {/* <Route
                            path="/news"
                            element={<News dialogsState={props.state.dialogsPage} />}
                        />
                        <Route
                            path="/music"
                            element={<News dialogsState={props.state.dialogsPage} />}
                        />
                        <Route
                            path="/settings"
                            element={<Dialogs dialogsState={props.state.dialogsPage} />}
                        /> */}
                    </Routes>
                </main>
                <Footer />
            </div>
        </BrowserRouter>
    );
}

export default App;
