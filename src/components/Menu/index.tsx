import React from 'react'
import styles from './index.module.css'
import {Link, LinkProps} from 'react-router-dom'

interface Props extends LinkProps {

}

export default function Menu(props: Props) {
    const className = (props.className ? props.className + ' ' : '') + `${styles.link}`
    return (
        <Link {...props} className={className}>
            {props.children}
        </Link>
    )
}