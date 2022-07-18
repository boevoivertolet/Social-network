import {ActionType, store, StoreType} from './state';
import {v1} from 'uuid';

const dialogsReducer = (state:StoreType, action: ActionType) => {

    switch (action.type) {
        case 'CHANGE-MESSAGE':
            store._state.dialogs.newMessageTextData = action.body
            break;
        case 'ADD-MESSAGE':
            let body = store._state.dialogs.newMessageTextData
            store._state.dialogs.newMessageTextData = ''
            store._state.dialogs.messageData.push({id: v1(), messageText: body})
            break;

    }
    return state
}




export const addMessageAC = () => ({type: 'ADD-MESSAGE' as const})

export const onChangeMessageAC = (value: string) => ({type: 'CHANGE-MESSAGE', body: value} as const)

export default dialogsReducer;