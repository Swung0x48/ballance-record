import React from 'react'
import styles from './index.module.css'
import {Menu} from 'components'

interface Props {
    title?: string
    children: React.ReactNode
}

export default function Dropdown(props: Props) {
    // return (
    //     <div className={`${styles.dropdown}`}>
    //         <button className={`${styles.dropbtn}`}>{props.title}</button>
    //         <div className={`${styles.dropdownContent}`}>
    //             <a href="#">Link 1</a>
    //             <a href="#">Link 2</a>
    //             <a href="#">Link 3</a>
    //         </div>
    //     </div>
    // )
    return (
        <div className={`${styles.dropdown}`}>
            <Menu to="#">{props.children}</Menu>
            <div className={`${styles.dropdownContent}`}>
                <Menu to="#">ab</Menu>
                <Menu to="#">cd</Menu>
            </div>
        </div>
    )
}