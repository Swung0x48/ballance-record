import React from 'react'
import {Link, LinkProps} from 'react-router-dom'

interface Props extends LinkProps {

}

export default function Menu(props: Props) {
    const className = "flex items-center box-border p-2 font-game text-sm text-white hover:bg-black"
                      + (props.className ? ' ' + props.className : '')
    return (
        <Link {...props} className={className}>
            {props.children}
        </Link>
    )
}