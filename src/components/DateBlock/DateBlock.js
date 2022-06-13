import React, { useState, useEffect } from 'react'

import { format } from 'date-fns'

function DateBlock() {
    const [time, setTime] = useState(new Date())
    useEffect(() => {
        const intervalId = setInterval(() => {
            setTime(new Date())
        }, 60000)
        return () => {
            clearInterval(intervalId)
        }
    }, [])
    return <h4>{format(time, 'dd.MM.yyyy HH:mm')}</h4>
}

export default DateBlock
