import React from 'react'
import styles from './index.module.css'

interface Props {
    title: string
}

const Dropdown: React.FC<Props> = props => {
    return (
        <div className={`${styles.dropdown}`}>
            <button className={`${styles.dropbtn}`}>{props.title}</button>
            <div className={`${styles.dropdownContent}`}>
                <a href="#">Link 1</a>
                <a href="#">Link 2</a>
                <a href="#">Link 3</a>
            </div>
        </div>
    )
}

export default Dropdown