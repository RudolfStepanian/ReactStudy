const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

let initialState = {
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
};

const dialogsReducer = (state = initialState, action) => {
    let stateCopy = {
        ...state,
        // messages: [...state.messages]
    };
    switch (action.type) {
        case ADD_MESSAGE:
            let newMessage = {id: Math.random()*100, message: state.newMessageText};
            stateCopy.messages.push(newMessage);
            stateCopy.newMessageText = '';
            return stateCopy;
        case UPDATE_NEW_MESSAGE_TEXT:
            stateCopy.newMessageText = action.newText;
            return stateCopy;
        default:
            return state;
    }
};

export let addMessageActionCreate = () => ({type: ADD_MESSAGE});
export let updateNewMessageTextActionCreator = (text) =>
    ({type: UPDATE_NEW_MESSAGE_TEXT, newText: text});

export default dialogsReducer;