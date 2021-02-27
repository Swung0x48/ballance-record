import React from 'react'
import styles from './index.module.css'

interface Props extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
}
const Input: React.FC<Props> = props => {
    return (
        <input className={`${styles.input}`} {...props} />
    )
}

export default Input