import React from 'react'

function Search() {
    return (
        <div
            style={{
                width: '80%',
                height: '70%',
            }}
        >
            <input
                type="text"
                placeholder="Search"
                style={{
                    outline: 'none',
                    border: 'none',
                    borderRadius: '25px',
                    backgroundColor: '#616161',
                    color: '#e0e0e0',
                    padding: '0 20px',
                    fontSize: '18px',
                    width: '80%',
                    height: '100%',
                }}
            />
        </div>
    )
}

export default Search
