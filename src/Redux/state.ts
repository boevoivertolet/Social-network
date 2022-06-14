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
export type FriendDataType = {
    id: string
    name: string
}
export type StateDataType = {
    profile: { postData: PostDataType[] }
    dialogs: {
        dialogData: DialogDataType[]
        messageData: MessageDataType[]
    }
    sidebar: {
        friendData: FriendDataType[]
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
    profile: {
        postData: [
            {id: v1(), message: 'message1', likesCount: 3},
            {id: v1(), message: 'message2', likesCount: 5}
        ]
    },
    sidebar: {
        friendData: [
            {id: v1(), name: 'Sasha', srcLink: 'https://avatars.githubusercontent.com/u/90279661?v=4'},
            {id: v1(), name: 'Ulya', srcLink: 'https://sun9-87.userapi.com/s/v1/if2/db9z2NUgGSaPO6_dK8udX27nGq3lKM1MBZ-fB2Jjeeo5qXzwq-PHe_FEgHxT0_CXspR2KcHvWjp5JJ_CTK1s8INX.jpg?size=1620x2160&quality=96&type=album'}
        ]
    }
}