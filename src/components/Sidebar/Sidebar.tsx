import styles from '../Sidebar/Sidebar.module.css';
import React from 'react';
import {FriendDataType} from '../../Redux/state';


type SidebarPropsType = {
    friendData: FriendDataType[]
}

export function Sidebar(props: SidebarPropsType) {

    return (
        <div className={styles.sidebar}>
            <div>Friends</div>
            <div>
                <img className={styles.avatarSidebar} src={'https://avatars.githubusercontent.com/u/90279661?v=4'}
                     alt="x"/>
                <span>{props.friendData[0].name}</span>
            </div>
            <div>
                <img className={styles.avatarSidebar}
                     src="https://sun9-87.userapi.com/s/v1/if2/db9z2NUgGSaPO6_dK8udX27nGq3lKM1MBZ-fB2Jjeeo5qXzwq-PHe_FEgHxT0_CXspR2KcHvWjp5JJ_CTK1s8INX.jpg?size=1620x2160&quality=96&type=album"
                     alt="x"/>
                <span>{props.friendData[1].name}</span>
            </div>

        </div>
    )
}