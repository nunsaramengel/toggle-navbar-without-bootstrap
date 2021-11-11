import React from 'react'

const Line = ( {text, color} ) => {
    return (
        <>
            <div className="line-container">
                <p style={{color: color}} className="line-paragraph">{text}</p>
            </div>
        </>
    )
}

export default Line
