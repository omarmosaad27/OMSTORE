import React from 'react'

const Title = ({name, title}) => {
    return (
        <div className="text-title">
            <h1 className="main-title">
                {name}<strong className="text-blue">{title}</strong>
            </h1>
        </div>
    )
}

export default Title
