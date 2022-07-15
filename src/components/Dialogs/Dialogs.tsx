import React, {ChangeEvent} from 'react';
import styles from './Dialogs.module.css'
import {Dialog} from './Dialog/Dialog';
import {Message} from './Message/Message';
import {addMessageAC, onChangeMessageAC, StoreType} from '../../Redux/state';

type DialogsPropsType = {
    /* state: StateDataType
     changeMessage:(newMessage: string)=> void
     addMessage:(id: string)=> void*/
    store: StoreType
}

export function Dialogs(props: DialogsPropsType) {


    let dialogDataElement = props.store.getState().dialogs.dialogData.map(dialog => <Dialog name={dialog.name}
                                                                                            id={dialog.id}/>);


    let messageDataElement = props.store.getState().dialogs.messageData.map(message => <Message
        text={message.messageText}
        id={message.id}/>)

    let newMessageTextData = props.store._state.dialogs.newMessageTextData;


    const sendMessageBody = () => {
        props.store.dispatch(addMessageAC())
    }
    const onNewMessageChange = (event: ChangeEvent<HTMLTextAreaElement> ) => {
        let body = event.target.value;
        props.store.dispatch(onChangeMessageAC(body))
    }



    return (

        <div className={styles.dialogs}>
            <div className={styles.dialogsItems}>
                {dialogDataElement}
            </div>
            <div className={styles.messages}>
                <div><textarea
                    value={newMessageTextData}
                    onChange={onNewMessageChange}
                    placeholder={'Enter message'}>
                </textarea>
                </div>
                <div>
                    <button onClick={sendMessageBody}>send</button>
                </div>
                {messageDataElement}
            </div>
        </div>
    )
}

