import profileReducer from "./profile-reducer";
import dialogsReducer from "./messages-reducer";


const store = {

    _state: {
        profilePage: {
            postData: [
                {id: 1, message: 'Hi, how are you?', like: '15'},
                {id: 2, message: 'It is my first post', like: '20'},
                {id: 3, message: 'It is my second post', like: '25'},
                {id: 4, message: 'It is my third post', like: '30'},
            ],
            newPostText: 'DKKKK'

        },
        messagesPage: {
            dialogsData: [
                {id: 1, name: 'Vasya'},
                {id: 2, name: 'Patya'},
                {id: 3, name: 'Saha'},
                {id: 4, name: 'Valera'},
                {id: 5, name: 'Oleg'},

            ],
            messages: [
                {id: 1, message: 'Hi'},
                {id: 2, message: 'Hello'},
                {id: 3, message: 'How are you'},
            ],
            newMessageBody: ''
        },
        sideBar: {
            sideBar: [
                {img: 'A', name: 'Andrew'},
                {img: 'B', name: 'Sasha'},
                {img: 'C', name: 'Dan'},
            ]
        }

    },
    getState() {
        return this._state
    },
    _callSubscriber() {
        console.log('state change')
    },

    addPost() {
        let newPost = {
            id: 5,
            message: this._state.profilePage.newPostText,
            like: 0
        }
        this._state.profilePage.postData.push(newPost);
        this._state.profilePage.newPostText = '';
        this._callSubscriber(this._state)
    },
    updatePostText(newText) {
        this._state.profilePage.newPostText = newText;
        this._callSubscriber(this._state)
    },
    subscribe(observer) {
        this._callSubscriber = observer
    },

    dispatch(action) {

        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.messagesPage = dialogsReducer(this._state.messagesPage, action)
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._callSubscriber(this._state)
    },

};




window.store = store;
export default store