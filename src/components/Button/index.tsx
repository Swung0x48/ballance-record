import React from 'react'
import styles from './index.module.css'

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
}

export default function Button(props: Props) {
    const className = `${styles.button}` + (props.className ? ' ' + props.className: '')
    return (
        <button {...props} className={className}>
            {props.children}
        </button>
    )
}