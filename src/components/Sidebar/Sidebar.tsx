import styles from '../Sidebar/Sidebar.module.css';
import React from 'react';
import {StateDataType} from '../../Redux/state';


type SidebarPropsType = {
    state: StateDataType
}

export function Sidebar(props: SidebarPropsType) {

    let srcSasha = props.state.sidebar.friendData[0].srcLink
    let srcUlya = props.state.sidebar.friendData[1].srcLink
    let nameSasha = props.state.sidebar.friendData[0].name
    let nameUlya = props.state.sidebar.friendData[1].name

    return (
        <div className={styles.sidebar}>
            <div>Friends</div>
            <div>
                <img className={styles.avatarSidebar} src={srcSasha}
                     alt="x"/>
                <span>{nameSasha}</span>
            </div>
            <div>
                <img className={styles.avatarSidebar}
                     src={srcUlya}
                     alt="x"/>
                <span>{nameUlya}</span>
            </div>
        </div>
    )
}