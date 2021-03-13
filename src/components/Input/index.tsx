import React from 'react'
import styles from './index.module.css'

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
}

export default function Input(props: Props) {
    const className = (props.className ? props.className + ' ' : '') + `${styles.input}`
    return (
        <input {...props} className={className} />
    )
}