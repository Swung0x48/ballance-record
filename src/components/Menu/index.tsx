import React from 'react'
import styles from './index.module.css'
import {Link} from 'react-router-dom'

interface Props {

}

const Menu: React.FC<Props> = props => {
    return (
        <React.Fragment>
            <Link className={`${styles.home} ${styles.link}`} to="/">BallanceRecord</Link>
            <span className={`${styles.link}`}>Records {/* TODO: Make it a dropdown*/}</span>
            <Link className={`${styles.link}`} to="/stats">Stats</Link>
            <Link className={`${styles.link}`} to="/admin">Admin</Link>
        </React.Fragment>
    )
}

export default Menu