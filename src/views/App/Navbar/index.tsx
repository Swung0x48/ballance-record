import React from 'react'
import styles from './index.module.css'

interface Props {
    leftElement: React.ReactNode,
    rightElement: React.ReactNode
}

export default function Navbar(props: Props) {
    return (
        <div className={`${styles.nav}`}>
            <span className={`${styles.flex}`}>{props.leftElement}</span>
            <span className={`${styles.flex}`}>{props.rightElement}</span>
        </div>
    )
}