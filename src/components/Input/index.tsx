import React from 'react'
import './index.css'

interface Props {
    [key: string]: any
}
const Input: React.FC<Props> = (props) => {
    return (
        <input className="input" {...props}></input>
    )
}

export default Input