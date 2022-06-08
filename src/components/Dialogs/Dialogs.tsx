import React from 'react';
import styles from './Dialogs.module.css'
import {Dialog} from './Dialog/Dialog';
import {Message} from './Message/Message';
import {v1} from 'uuid';


export function Dialogs() {

    let dialogData = [
        {id: v1(), name: 'Sasha'},
        {id: v1(), name: 'Ulya'}

    ]
    let dialogDataElement = dialogData.map(dialog => <Dialog name={dialog.name} id={dialog.id}/>);

    let messageData = [
        {id: v1(), messageText: 'text1'},
        {id: v1(), messageText: 'text2'}
    ]
    let messageDataElement = messageData.map(message => <Message text={message.messageText} id={message.id}/>)

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

