import React from 'react'

interface Props {
    leftElement: React.ReactNode,
    rightElement: React.ReactNode
}

export default function Navbar(props: Props) {
    return (
        <div className="flex justify-between w-full text bg-primary">
            <span className="flex">{props.leftElement}</span>
            <span className="flex">{props.rightElement}</span>
        </div>
    )
}