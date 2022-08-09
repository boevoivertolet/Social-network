import {ActionType, StoreType} from './Types';
import {v1} from 'uuid';


let initialState = {
    postData: [
        {id: v1(), message: '', likesCount: 0},
    ],
    newPostTextData: [
        {text: ''}
    ]
}


export const profileReducer = (state = initialState, action: ActionType) => {
    switch (action.type) {
        case 'ADD-POST':
            state._addPost(action.type);
            break;
        case 'CHANGE-TEXT':
            state._changeText(action.newText);
            break;
    }

    return state;
}


export const addPostAC = () => ({type: 'ADD-POST' as const})
export const onChangePostAC = (value: string) => ({type: 'CHANGE-TEXT', newText: value} as const)

