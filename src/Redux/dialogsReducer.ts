import {v1} from 'uuid';
import {ActionType, StoreType} from './Types';






export const dialogsReducer = (store: StoreType, action: ActionType) => {

    switch (action.type) {
        case 'CHANGE-MESSAGE':
            store.getState().dialogs.newMessageTextData = action.body
            break;
        case 'ADD-MESSAGE':
            let body = store.getState().dialogs.newMessageTextData
            store.getState().dialogs.newMessageTextData = ''
            store.getState().dialogs.messageData.push({id: v1(), messageText: body})
            break;

    }
    return store
}


export const addMessageAC = () => ({type: 'ADD-MESSAGE' as const})

export const onChangeMessageAC = (value: string) => ({type: 'CHANGE-MESSAGE', body: value} as const)

