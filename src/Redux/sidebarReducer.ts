import {ActionType, StoreType} from './Types';
import {v1} from 'uuid';

let initialState = {
    friendData: [
        {id: v1(), name: 'Sasha', srcLink: 'https://avatars.githubusercontent.com/u/90279661?v=4'},
        {
            id: v1(),
            name: 'Ulya',
            srcLink: 'https://sun9-87.userapi.com/s/v1/if2/db9z2NUgGSaPO6_dK8udX27nGq3lKM1MBZ-fB2Jjeeo5qXzwq-PHe_FEgHxT0_CXspR2KcHvWjp5JJ_CTK1s8INX.jpg?size=1620x2160&quality=96&type=album'
        }
    ]
}

export const sidebarReducer = (state= initialState, action: ActionType) => {
    return state;
}

