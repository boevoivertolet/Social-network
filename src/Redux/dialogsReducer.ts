import {v1} from 'uuid';
import {ActionType, StoreType} from './Types';



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
            state._state.dialogs.newMessageTextData = action.body
            break;
        case 'ADD-MESSAGE':
            let body = state._state.dialogs.newMessageTextData
            state._state.dialogs.newMessageTextData = ''
            state._state.dialogs.messageData.push({id: v1(), messageText: body})
            break;

    }
    return state
}


export const addMessageAC = () => ({type: 'ADD-MESSAGE' as const})

export const onChangeMessageAC = (value: string) => ({type: 'CHANGE-MESSAGE', body: value} as const)

