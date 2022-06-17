import {v1} from 'uuid';


export const store: StoreType = {
    _state: {
        dialogs: {
            dialogData: [
                {id: v1(), name: 'Sasha'},

            ],
            messageData: [
                {id: v1(), messageText: 'Message'}

            ]
        },
        profile: {
            postData: [
                {id: v1(), message: '', likesCount: 0},
            ],
            newPostTextData: [
                {text: ''}
            ]
        },
        sidebar: {
            friendData: [
                {id: v1(), name: 'Sasha', srcLink: 'https://avatars.githubusercontent.com/u/90279661?v=4'},
                {
                    id: v1(),
                    name: 'Ulya',
                    srcLink: 'https://sun9-87.userapi.com/s/v1/if2/db9z2NUgGSaPO6_dK8udX27nGq3lKM1MBZ-fB2Jjeeo5qXzwq-PHe_FEgHxT0_CXspR2KcHvWjp5JJ_CTK1s8INX.jpg?size=1620x2160&quality=96&type=album'
                }
            ]
        }
    },
    _rerenderEntireTree: (state: StateDataType) => {
        console.log('state changed')
    },
    _changeText(newText: string) {
        this._state.profile.newPostTextData[0].text = newText
        this._rerenderEntireTree(this._state);
    },
    _addPost() {
        let newPost = {
            id: v1(),
            message: this._state.profile.newPostTextData[0].text,
            likesCount: 0
        }
        this._state.profile.postData.unshift(newPost)
        this._state.profile.newPostTextData[0].text = '';
        this._rerenderEntireTree(this._state);

    },
    _changeMessage(newMessage: string) {
        this._state.dialogs.messageData[0].messageText = newMessage
        this._rerenderEntireTree(this._state);
    },
    _addMessage() {
        let newMessage = {
            id: v1(),
            messageText: this._state.dialogs.messageData[0].messageText
        }
        this._state.dialogs.messageData.unshift(newMessage)
        this._state.dialogs.messageData[0].messageText= ''
        this._rerenderEntireTree(this._state);
    },
    subscribe(callback: () => void) {
        this._rerenderEntireTree = callback
    },
    getState() {
        return this._state
    },
    dispatch(action) {
        if (action.type === 'ADD-POST') {
            this._addPost(action.type);
        } else if (action.type === 'CHANGE-TEXT') {
         this._changeText(action.newText);
        } else if(action.type === 'CHANGE-MESSAGE'){
            this._changeMessage(action.newMessage);
        }else if(action.type=== 'ADD-MESSAGE'){
            this._addMessage();
        }
    }


}


//////////////////////////////////////////////////////////////////////////////////////////////// Types
type PostDataType = {
    id: string
    message: string
    likesCount: number
}
type newPostTextDataType = {
    text: string
}
type DialogDataType = {
    id: string
    name: string
}
type MessageDataType = {
    id: string
    messageText: string
}
type FriendDataType = {
    id: string
    name: string
    srcLink: string
}
type ProfileType = {
    postData: PostDataType[]
    newPostTextData: newPostTextDataType[]
}
type DialogsType = {
    dialogData: DialogDataType[]
    messageData: MessageDataType[]
}
type SidebarType = {
    friendData: FriendDataType[]
}
type AddPostActionType = {
    type: 'ADD-POST'
}
type ChangeTextActionType = {
    type: 'CHANGE-TEXT'
    newText: string
}
type ChangeMessageActionType ={
    type: 'CHANGE-MESSAGE'
    newMessage: string
}
type AddMessageActionType ={
    type: 'ADD-MESSAGE'
}

type ActionType = AddPostActionType | ChangeTextActionType | ChangeMessageActionType | AddMessageActionType

export type StateDataType = {
    profile: ProfileType
    dialogs: DialogsType
    sidebar: SidebarType
}
export type StoreType = {
    _state: StateDataType
    _rerenderEntireTree: (state: StateDataType) => void
    _changeText: (newText: string) => void
    _addPost: (value: string) => void
    _changeMessage: (newMessage: string) => void
    _addMessage: () => void
    subscribe: (callback: () => void) => void
    getState: () => StateDataType
    dispatch: (action: ActionType) => void
}
////////////////////////////////////////////////////////////////////////////////////////////




