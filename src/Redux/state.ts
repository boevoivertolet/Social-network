import {v1} from 'uuid';
let rerenderEntireTree = (state: StateDataType)=> {
    console.log('hiho')
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
////////////////////////////////////////////////////////////////////////////////////////////


export let state: StateDataType = {
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
}



export const changeText = (newText: string) => {
    state.profile.newPostTextData[0].text = newText
    rerenderEntireTree(state);
}
export const addPost = () => {
    let newPost = {
        id: v1(),
        message: state.profile.newPostTextData[0].text,
        likesCount: 0
    }
    state.profile.postData.unshift(newPost)
    changeText('')
    rerenderEntireTree(state);
}
export const changeMessage = (newMessage: string) => {
    state.dialogs.messageData[0].messageText = newMessage
    rerenderEntireTree(state);
}
export const addMessage = () => {
    let newMessage = {
        id: v1(),
        messageText: state.dialogs.messageData[0].messageText
    }
    state.dialogs.messageData.unshift(newMessage)
    changeMessage('')

    rerenderEntireTree(state);
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////

export const subscribe = (callback:()=> void) => {
    rerenderEntireTree= callback
}
