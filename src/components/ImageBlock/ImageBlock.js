import React from 'react'

function ImageBlock(props) {
    return (
        <div
            style={{
                backgroundImage: `url(${props.src})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                textAlign: 'center',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexBasis: 0,
                flexGrow: '1',
                textTransform: 'uppercase',
                color: 'white',
                fontSize: '30px',
                padding: 0,
            }}
        >
            <h2>{props.text}</h2>
        </div>
    )
}

export default ImageBlock
