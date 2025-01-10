import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";

const store = {
    _state: {
        profilePage: {
            posts: [
                { id: 3, post: "Today so cold", likesCount: 7 },
                { id: 4, post: "and wet", likesCount: 9 },
            ],
            newPostText: "чет",
        },
        dialogsPage: {
            dialogs: [
                { id: 1, name: "Name1" },
                { id: 2, name: "Name2" },
                { id: 3, name: "Name3" },
                { id: 4, name: "Name4" },
                { id: 5, name: "Name5" },
            ],
            messages: [
                { id: 1, message: "Hi" },
                { id: 2, message: "How are u" },
                { id: 3, message: "Yo" },
                { id: 4, message: "Yo man" },
                { id: 5, message: "Yo chick" },
            ],
            newMessageBody: "",
        },
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
