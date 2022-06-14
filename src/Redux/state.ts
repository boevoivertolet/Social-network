import {v1} from 'uuid';


export type PostDataType = {
    id: string
    message: string
    likesCount: number
}
export type DialogDataType = {
    id: string
    name: string
}
export type MessageDataType = {
    id: string
    messageText: string
}
export type StateDataType = {
    profile: {postData: PostDataType[]}
    dialogs: {
        dialogData: DialogDataType[]
        messageData: MessageDataType[]
    }
}

export let state = {
    dialogs: {
        dialogData: [
            {id: v1(), name: 'Sasha'},
            {id: v1(), name: 'Ulya'}
        ],
        messageData: [
            {id: v1(), messageText: 'text1'},
            {id: v1(), messageText: 'text2'}
        ]
    },
    profile:{
        postData: [
            {id: v1(), message: 'message1', likesCount: 3},
            {id: v1(), message: 'message2', likesCount: 5}
        ]
    }
}