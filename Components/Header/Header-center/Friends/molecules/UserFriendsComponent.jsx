import React from 'react'
import FriendComponent from '../atoms/FriendComponent'
import styles from '../styles/mainstyles.module.css'
function UserFriendsComponent() {
    return (
        <div className={styles.container}>
            <FriendComponent/>
            <FriendComponent/>
            <FriendComponent/>
            <FriendComponent/>
            <FriendComponent/>
            <FriendComponent/>
            <FriendComponent/>
            <FriendComponent/>
        </div>
    )
}

export default UserFriendsComponent
