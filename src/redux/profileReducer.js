const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

let initialState = {
    posts: [
        { id: 3, post: "Today so cold", likesCount: 7 },
        { id: 4, post: "and wet", likesCount: 9 },
    ],
    newPostText: "чет",
};

const profileReducer = (state = initialState, action) => {
    const addPost = () => {
        const newPost = {
            id: 5,
            post: state.newPostText,
            likesCount: 0,
        };
        state.posts.push(newPost); // не надо так СМ иимутаб
        state.newPostText = "";
    };

    const updateNewPostText = (newText) => {
        state.newPostText = newText;
    };

    switch (action.type) {
        case ADD_POST:
            addPost();
            return state;

        case UPDATE_NEW_POST_TEXT:
            updateNewPostText(action.newText);
            return state;

        default:
            return state;
    }
};

export const addPostsActionCreator = () => ({ type: ADD_POST });
export const updateNewPostTextActionCreator = (text) => ({
    type: UPDATE_NEW_POST_TEXT,
    newText: text,
});

export default profileReducer;
