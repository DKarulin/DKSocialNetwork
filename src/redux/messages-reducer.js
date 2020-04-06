const UPDATE_NEW_MASSAGE_BODY = 'UPDATE_NEW_MASSAGE_BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';

let initialState = {
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

};


const dialogsReducer = (state = initialState, action) => {


    switch (action.type) {
        case UPDATE_NEW_MASSAGE_BODY:
            return  {
                ...state,
                newMessageBody: action.body
            }

        case SEND_MESSAGE:
            let body = action.newMassegeBody
            return  {
                ...state,
                messages: [...state.messages, {id: 4,   message: body} ],

            }
        default:
            return state;

    }
}

export const sendMessageCreater = (newMassegeBody) => ({type: SEND_MESSAGE, newMassegeBody: newMassegeBody})
export const updateNewMessageBodyCreater = (text) => ({
    type: UPDATE_NEW_MASSAGE_BODY,
    body: text
})

export default dialogsReducer