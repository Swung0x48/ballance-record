import React from 'react'

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
}

export default function Button(props: Props) {
    const className = "font-game text-sm m-1 px-1 border-white outline-none hover:bg-secondary hover:text-white"
                      + (props.className ? ' ' + props.className: '')
    return (
        <button {...props} className={className}>
            {props.children}
        </button>
    )
}