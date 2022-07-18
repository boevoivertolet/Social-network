import {ActionType, StoreType} from './state';

 const profileReducer = (state:StoreType , action: ActionType) => {
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

export default profileReducer;