import React from 'react';
import styles from './Dialogs.module.css'
import {Dialog} from './Dialog/Dialog';
import {Message} from './Message/Message';
import {StateDataType} from '../../Redux/state';

type DialogsPropsType = {
    state: StateDataType
}

export function Dialogs(props: DialogsPropsType) {


    let dialogDataElement = props.state.dialogs.dialogData.map(dialog => <Dialog name={dialog.name} id={dialog.id}/>);


    let messageDataElement = props.state.dialogs.messageData.map(message => <Message text={message.messageText}
                                                                                     id={message.id}/>)

    let newTextareaValue = React.createRef<HTMLTextAreaElement>()


    const addMessage = () => {
        let value = newTextareaValue.current?.value
        alert(value)
    }



    return (

        <div className={styles.dialogs}>
            <div className={styles.dialogsItems}>
                {dialogDataElement}
            </div>
            <div className={styles.messages}>
                <textarea ref={newTextareaValue}></textarea>
                <button onClick={addMessage}>send</button>
                {messageDataElement}
            </div>
        </div>
    )
}

