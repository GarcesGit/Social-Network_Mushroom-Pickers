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
            ],
            messages: [
                { id: 1, message: "Hi" },
                { id: 2, message: "How are u" },
                { id: 3, message: "Yo" },
                { id: 4, message: "Yo man" },
            ],
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

    _addPost() {
        const newPost = {
            id: 5,
            post: this._state.profilePage.newPostText,
            likesCount: 0,
        };
        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.newPostText = "";
        this._callSubscriber(this._state);
    },
    _updateNewPostText(newText) {
        this._state.profilePage.newPostText = newText;
        this._callSubscriber(this._state);
    },
    dispatch(action) {
        if (action.type === "ADD-POST") {
            this._addPost();
        } else if (action.type === "UPDATE-NEW-POST-TEXT") {
            this._updateNewPostText(action.newText);
        }
    },
};

export default store;
window.store = store;
