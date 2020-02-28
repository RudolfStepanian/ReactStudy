let state = {
    profilePage: {
        posts: [
            {id: 1, message: 'hi how are you?', likeCount: 12},
            {id: 2, message: "it's my first post", likeCount: 6},
            {id: 2, message: "it's my second post", likeCount: 3},
            {id: 2, message: "it's my new post", likeCount: 15}
        ]
    },
    messagesPage:{
        messages: [
            {id: 1, message: 'hi'},
            {id: 2, message: 'how are you'},
            {id: 3, message: 'yo'},
            {id: 4, message: 'yo'},
            {id: 5, message: 'yo'},
            {id: 6, message: 'yo'},
        ],
        dialogs:[
            {id: 1, name: 'Di'},
            {id: 2, name: 'An'},
            {id: 3, name: 'Sv'},
            {id: 4, name: 'Sa'},
            {id: 5, name: 'Vi'},
            {id: 6, name: 'Va'},
        ]
    }
};


export default state;