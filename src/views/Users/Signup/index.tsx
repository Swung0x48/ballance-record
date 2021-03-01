import React from 'react'
import styles from './index.module.css'
import {Button, Input} from '../../../components'

interface Props {

}
const Signup: React.FC<Props> = props => {
    return (
        <form className={`${styles.signup}`}>
            <div className={`${styles.title}`}>Sign Up</div>
            <Input type="email" placeholder={"Email"}/>
            <br />
            <Input type="text" placeholder={"Nickname"}/>
            <br />
            <Input type="password" placeholder={"Password"}/>
            <br />
            <Button>Sign Up</Button>
            <Button type="reset">Reset</Button>
        </form>
    )
}

export default Signup