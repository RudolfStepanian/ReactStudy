let ADD_POST = 'ADD-POST';
let UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
let ADD_MESSAGE = 'ADD-MESSAGE';
let UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';


let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'hi how are you?', likeCount: 12},
                {id: 2, message: "it's my first post", likeCount: 6},
                {id: 2, message: "it's my second post", likeCount: 3},
                {id: 2, message: "it's my new post", likeCount: 15}
            ],
            newPostText: 'new post text'
        },
        messagesPage: {
            messages: [
                {id: 1, message: 'hi'},
                {id: 2, message: 'how are you'},
                {id: 3, message: 'yo'},
                {id: 4, message: 'yo'},
                {id: 5, message: 'yo'},
                {id: 6, message: 'yo'},
            ],
            dialogs: [
                {id: 1, name: 'Di'},
                {id: 2, name: 'An'},
                {id: 3, name: 'Sv'},
                {id: 4, name: 'Sa'},
                {id: 5, name: 'Vi'},
                {id: 6, name: 'Va'},
            ],
            newMessageText: ''
        },
        sidebar: {
            friends: [
                {
                    name: 'cool nun',
                    ava: 'https://media.istockphoto.com/photos/senior-nun-giving-two-middle-finger-gestures-isolated-on-white-picture-id108129744'
                },
                {
                    name: 'angry dude',
                    ava: 'https://nexter.org/wp-content/uploads/2019/07/weird-stock-images-photos-funny-pic28.jpg'
                },
                {
                    name: 'maple',
                    ava: 'data:image/jpeg;base64,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'
                },
                {name: 'doctor', ava: 'https://img3.stockfresh.com/files/k/kurhan/m/72/428456_stock-photo-doctor.jpg'},
                {name: 'stop it', ava: 'https://www.kiplinger.com/kipimages/pages/18048.jpg'}
            ]
        }
    },
    _callSubscriber() {
        console.log('state-changed');
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {
        if (action.type === ADD_POST) {
            let newPost = {
                id: 5,
                message: this._state.profilePage.newPostText,
                likeCount: 0
            };
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state);
        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
        } else if (action.type === ADD_MESSAGE) {
            let newMessage = {
                id: 100 * Math.random(),
                message: this._state.messagesPage.newMessageText
            };
            this._state.messagesPage.messages.push(newMessage);
            this._state.messagesPage.newMessageText = '';
            this._callSubscriber(this._state);
        } else if (action.type === UPDATE_NEW_MESSAGE_TEXT) {
            this._state.messagesPage.newMessageText = action.newText;
            this._callSubscriber(this._state);
        }
    },
};

export let addPostActionCreator = () => ({type: ADD_POST});
export let updateNewPostTextActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text});
export let addMessageActionCreate = () => ({type: ADD_MESSAGE});
export let updateNewMessageTextActionCreator = (text) => ({type: UPDATE_NEW_MESSAGE_TEXT, newText: text});

export default store;
window.store = store;


// addPost(){
//     let newPost = {
//         id: 5,
//         message: this._state.profilePage.newPostText,
//         likeCount: 0
//     };
//     this._state.profilePage.posts.push(newPost);
//     this._state.profilePage.newPostText = '';
//     this._callSubscriber(this._state);
// },
// updateNewPostText(newText){
//     this._state.profilePage.newPostText = newText;
//     this._callSubscriber(this._state);
// },