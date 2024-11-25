let rerenderEntireTree = () => {};

const state = {
    profilePage: {
        posts: [
            { id: 1, post: "Yesterday I saw ducks", likesCount: 3 },
            { id: 2, post: "They were fat and nice", likesCount: 5 },
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
};

// export const addPost = (postMessage) => {
//     const newPost = { id: 5, post: state.profilePage.newPostText, likesCount: 0 };
//     state.profilePage.posts.push(newPost);
//     state.profilePage.newPostText = "";
//     rerenderEntireTree(state);
// };

// export const updateNewPostText = (newText) => {
//     state.profilePage.newPostText = newText;
//     rerenderEntireTree(state);
// };
// export const subscribe = (observer) => {
//     rerenderEntireTree = observer;
// };
// export default state;
