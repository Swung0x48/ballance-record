import React from 'react'
import styles from './index.module.css'
import {Link, LinkProps} from 'react-router-dom'

interface Props extends LinkProps {

}

const Menu: React.FC<Props> = props => {
    return (
        <Link className={`${styles.link}`} {...props}>
            {props.children}
        </Link>
    )
}

export default Menu