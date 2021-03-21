import React from 'react'

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
}

export default function Input(props: Props) {
    const className = "bg-gray-600 bg-opacity-30 text-2xl font-game outline-none rounded-none focus:bg-opacity-60"
                      + (props.className ? ' ' + props.className : '')
    return (
        <input {...props} className={className} />
    )
}