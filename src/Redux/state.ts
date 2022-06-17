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
    changeText(newText: string) {
        this._state.profile.newPostTextData[0].text = newText
        this._rerenderEntireTree(this._state);
    },
    addPost() {
        let newPost = {
            id: v1(),
            message: this._state.profile.newPostTextData[0].text,
            likesCount: 0
        }
        this._state.profile.postData.unshift(newPost)
        this.changeText('')
        this._rerenderEntireTree(this._state);
    },
    changeMessage(newMessage: string) {
        this._state.dialogs.messageData[0].messageText = newMessage
        this._rerenderEntireTree(this._state);
    },
    addMessage() {
        let newMessage = {
            id: v1(),
            messageText: this._state.dialogs.messageData[0].messageText
        }
        this._state.dialogs.messageData.unshift(newMessage)
        this.changeMessage('')

        this._rerenderEntireTree(this._state);
    },
    subscribe(callback: () => void) {
        this._rerenderEntireTree = callback
    },
    getState() {
        return this._state
    }
}


////////////////////////////////////////////////////////////////////////////////////////////// // Types
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

export type StateDataType = {
    profile: ProfileType
    dialogs: DialogsType
    sidebar: SidebarType
}
export type StoreType = {
    _state: StateDataType
    _rerenderEntireTree: (state: StateDataType) => void
    changeText: (newText: string) => void
    addPost: (value: string) => void
    changeMessage: (newMessage: string) => void
    addMessage: (value: string) => void
    subscribe: (callback: () => void) => void
    getState: () => StateDataType
}


////////////////////////////////////////////////////////////////////////////////////////////




