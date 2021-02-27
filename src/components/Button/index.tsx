import React from 'react'
import styles from './index.module.css'

interface Props extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>{
}

const Button: React.FC<Props> = (props) => {
    return (
        <button className={`${styles.button}`} {...props}>
            {props.children}
        </button>
    )
}

export default Button