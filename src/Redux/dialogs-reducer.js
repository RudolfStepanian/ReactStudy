const ADD_MESSAGE = 'ADD-MESSAGE';

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
    ]
};

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            return {...state,
                messages: [...state.messages, {id: Math.random() * 100, message: action.newMessageBody}]
            };
        default:
            return state;
    }
};

export let addMessageActionCreate = (newMessageBody) => ({type: ADD_MESSAGE, newMessageBody});

export default dialogsReducer;