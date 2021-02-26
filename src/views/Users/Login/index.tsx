import React from 'react'
import { Input } from 'components'
import './index.css'

export default () => {
    return (
        <form className="login">
            <p className="title">Login</p>
            <Input type="email"/>
            <br />
            <Input type="password"/>
        </form>
    )
}