import {ActionType, StoreType} from './Types';
import {v1} from 'uuid';






export const profileReducer = (store: StoreType , action: ActionType) => {
    switch (action.type) {
        case 'ADD-POST':
            /*state._addPost(action.type);*/
            let newPost = {
                id: v1(),
                message: store.getState().profile.newPostTextData[0].text,
                likesCount: 0
            }
            store.getState().profile.postData.unshift(newPost)
            store.getState().profile.newPostTextData[0].text = '';
            break;
        case 'CHANGE-TEXT':
           /* state._changeText(action.newText);*/
            store.getState().profile.newPostTextData[0].text = action.newText
            break;
    }

    return store;
}


export const addPostAC = () => ({type: 'ADD-POST' as const})
export const onChangePostAC = (value: string) => ({type: 'CHANGE-TEXT', newText: value} as const)

