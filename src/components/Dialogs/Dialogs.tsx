import React from 'react';
import styles from './Dialogs.module.css'
import {Dialog} from './Dialog/Dialog';
import {Message} from './Message/Message';


export function Dialogs() {
    return (

        <div className={styles.dialogs}>
            <div className={styles.dialogsItems}>
                <Dialog name={'Sasha'} id ='1'/>
                <br/>
                <br/>
                <Dialog name={'Ulya'} id ='2'/>
            </div>
            <div className={styles.messages}>
                <Message text={'text'}/>
                <Message text={'text2'}/>
            </div>
        </div>
    )
}

