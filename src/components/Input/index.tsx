import React from 'react'
import styles from './index.module.css'

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
}

export default function Input(props: Props) {
    const className = `${styles.input}` + (props.className ? ' ' + props.className : '')
    return (
        <input {...props} className={className} />
    )
}