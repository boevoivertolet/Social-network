export type PostDataType = {
    id: string
    message: string
    likesCount: number
}
export type newPostTextDataType = {
    text: string
}
export type ProfileType = {
    postData: PostDataType[]
    newPostTextData: newPostTextDataType[]
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
    srcLink: string
}

export type DialogsType = {
    dialogData: DialogDataType[]
    messageData: MessageDataType[]
    newMessageTextData: string
}
export type SidebarType = {
    friendData: FriendDataType[]
}



export type AddPostActionType = {
    type: 'ADD-POST'
}
export type ChangeTextActionType = {
    type: 'CHANGE-TEXT'
    newText: string
}
export type ChangeMessageActionType = {
    type: 'CHANGE-MESSAGE'
    body: string
}
export type AddMessageActionType = {
    type: 'ADD-MESSAGE'
}


export type ActionType = AddPostActionType | ChangeTextActionType | ChangeMessageActionType | AddMessageActionType

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