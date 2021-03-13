import React from 'react'
import styles from './index.module.css'

interface Props {
    leftElement: React.ReactNode,
    rightElement: React.ReactNode
}

export default function Navbar(props: Props) {
    return (
        <div className={`${styles.nav}`}>
            <span className={`${styles.left}`}>{props.leftElement}</span>
            <span className={`${styles.right}`}>{props.rightElement}</span>
        </div>
    )
}