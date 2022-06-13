import React from 'react'

function Logo(props) {
    return (
        <div
            style={{
                height: '100%',
                width: '20%',
                marginRight: '10px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <img
                className="logo"
                src={props.src}
                alt="Logo"
                style={{
                    filter: 'invert(97%) sepia(1%) saturate(1020%) hue-rotate(241deg) brightness(119%) contrast(100%)',
                    height: '90%',
                }}
            />
        </div>
    )
}

export default Logo
