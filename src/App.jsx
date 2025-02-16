import "./App.css";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Navbar from "./components/navbar/Navbar";
import Profile from "./pages/profile/Profile";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import DialogsContainer from "./pages/dialogs/DialogsContainer";
import { Provider } from "react-redux";

const App = (props) => {
    return (
        <BrowserRouter>
            {/* <Provider> */}
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
                                    dispatch={props.dispatch}
                                />
                            }
                        />
                        <Route
                            path="/dialogs"
                            element={
                                <DialogsContainer
                                    dialogsState={props.state.dialogsPage}
                                    dispatch={props.dispatch}
                                />
                            }
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
            {/* </Provider> */}
        </BrowserRouter>
    );
};

export default App;
