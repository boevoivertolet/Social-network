import React from 'react';
import styles from './Dialogs.module.css'
import {Dialog} from './Dialog/Dialog';
import {Message} from './Message/Message';
import {DialogDataType, MessageDataType} from '../../Redux/state';

type DialogsPropsType={
    dialogData: DialogDataType[]
    messageData: MessageDataType[]
}

export function Dialogs(props: DialogsPropsType) {


    let dialogDataElement = props.dialogData.map(dialog => <Dialog name={dialog.name} id={dialog.id}/>);


    let messageDataElement = props.messageData.map(message => <Message text={message.messageText} id={message.id}/>)

    return (

        <div className={styles.dialogs}>
            <div className={styles.dialogsItems}>

                {dialogDataElement}
            </div>
            <div className={styles.messages}>
                {messageDataElement}
            </div>
        </div>
    )
}

