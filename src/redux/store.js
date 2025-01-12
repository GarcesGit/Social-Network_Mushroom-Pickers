import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";

const store = {
    _state: {
        profilePage: {},
        dialogsPage: {},
    },

    getState() {
        return this._state;
    },

    _callSubscriber() {
        console.log("state changed");
    },

    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {
        this._state.profileReducer = profileReducer(this._state.profilePage, action); // _state обновляется тк profileReducer возвращает новый

        this._state.dialogsReducer = dialogsReducer(this._state.dialogsPage, action);

        this._callSubscriber(this._state);
    },
};

export default store;
window.store = store;
