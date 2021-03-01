import React from 'react'
import {Link} from "react-router-dom";
import styles from './index.module.css'

interface Props {

}

const UserWidget: React.FC<Props> = props => {
    return (
        <React.Fragment>
            <Link className={`${styles.link}`} to="/login">
                Log In
            </Link>
            <Link className={`${styles.link}`} to="/signup">
                Sign Up
            </Link>
        </React.Fragment>)
}

export default UserWidget