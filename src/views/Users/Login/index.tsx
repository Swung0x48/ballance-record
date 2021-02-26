import React from 'react'
import { Input, Button } from 'components'
import styles from './index.module.css'

export default () => {
    return (
        <form className={`${styles.login}`}>
            <p className={`${styles.title}`}>Login</p>
            <Input type="email" placeholder={"Email"}/>
            <br />
            <Input type="password" placeholder={"Password"}/>
            <br />
            <Button>Login</Button>
        </form>
    )
}