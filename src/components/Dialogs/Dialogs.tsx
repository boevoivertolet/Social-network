import React from 'react';
import styles from './Dialogs.module.css'
import {Dialog} from './Dialog/Dialog';
import {Message} from './Message/Message';


export function Dialogs() {

    let DialogData = [
        {id: '1', name: 'Sasha'},
        {id: '2', name: 'Ulya'}
    ]
    let MessageData = [
        {id: '1', messageText: 'text1'},
        {id: '2', messageText: 'text2'}
    ]


    return (

        <div className={styles.dialogs}>
            <div className={styles.dialogsItems}>
                <Dialog name={DialogData[0].name} id={DialogData[0].id}/>
                <Dialog name={DialogData[1].name} id={DialogData[1].id}/>
            </div>
            <div className={styles.messages}>
                <Message text={MessageData[0].messageText} id={MessageData[0].id}/>
                <Message text={MessageData[1].messageText} id={MessageData[1].id}/>

            </div>
        </div>
    )
}

