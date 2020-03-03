const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
    posts: [
        {id: 1, message: 'hi how are you?', likeCount: 12},
        {id: 2, message: "it's my first post", likeCount: 6},
        {id: 2, message: "it's my second post", likeCount: 3},
        {id: 2, message: "it's my new post", likeCount: 15}
    ],
    newPostText: 'new post text'
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            debugger;
            let newPost = {
                id: 5,
                message: state.newPostText,
                likeCount: 0
            };
            state.posts.push(newPost);
            state.newPostText = '';
            return state;
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText;
            return state;
        default:
            return state;
    }
};

export let addPostActionCreator = () => ({type: ADD_POST});
export let updateNewPostTextActionCreator = (text) =>
    ({type: UPDATE_NEW_POST_TEXT, newText: text});

export default profileReducer;