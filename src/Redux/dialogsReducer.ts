import {v1} from 'uuid';
import {ActionType} from './Types';



let initialState = {
        dialogData: [
            {id: v1(), name: 'Sasha'},

        ],
        messageData: [
            {id: v1(), messageText: ''}

        ],
        newMessageTextData: ''
    }


export const dialogsReducer = (state =initialState, action: ActionType) => {

    switch (action.type) {
        case 'CHANGE-MESSAGE':
            state.newMessageTextData = action.body
            break;
        case 'ADD-MESSAGE':
            let body = state.newMessageTextData
            state.newMessageTextData = ''
            state.messageData.push({id: v1(), messageText: body})
            break;

    }
    return state
}


export const addMessageAC = () => ({type: 'ADD-MESSAGE' as const})

export const onChangeMessageAC = (value: string) => ({type: 'CHANGE-MESSAGE', body: value} as const)

