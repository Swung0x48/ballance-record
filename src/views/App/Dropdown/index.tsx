import React from 'react'
import Menu from '../Menu'

interface Props {
    title?: string
    children: React.ReactNode
}

export default function Dropdown(props: Props) {
    return (
        <span className="relative group">
            <Menu to="#">{props.title}</Menu>
            <div className="box-border w-full absolute bg-primary hidden group-hover:block">
                {props.children}
            </div>
        </span>
    )
}