import React from 'react'
import styles from './index.module.css'
import Menu from '../Menu'

interface Props {
    title?: string
    children: React.ReactNode
}

export default function Dropdown(props: Props) {
    return (
        <span className={`${styles.dropdown}`}>
            <Menu to="#">{props.title}</Menu>
            <div className={`${styles['dropdown-content']}`}>
                {props.children}
            </div>
        </span>
    )
}