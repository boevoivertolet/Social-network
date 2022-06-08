import styles from './Message.module.css';
import React from 'react';

type MessagePropsType = {
    text: string
}

export function Message(props: MessagePropsType) {
    return (
        <div className={styles.message}>
            {props.text}
        </div>
    )
}