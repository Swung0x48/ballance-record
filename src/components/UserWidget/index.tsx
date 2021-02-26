import React from 'react'
import {Link} from "react-router-dom";
import styles from './index.module.css'
import {Button} from "../index";

interface Props {

}

const UserWidget: React.FC<Props> = (props) => {
    return (
        <div className={`${styles.nav}`}>
            <Link to="/login">
                <Button>Log In</Button>
            </Link>
            <Link to="/signup">
                <Button>Sign Up</Button>
            </Link>
        </div>)
}

export default UserWidget