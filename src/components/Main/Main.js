import React from 'react'

import ImageBlock from '../ImageBlock/ImageBlock.js'

import './Main.css'

function Main(props) {
    return (
        <div className="main">
            <ImageBlock
                text="hey"
                src="https://source.unsplash.com/gYl-UtwNg_I/1500x1500"
            />
            <ImageBlock
                text="let's"
                src="https://source.unsplash.com/rFKUFzjPYiQ/1500x1500"
            />
            <ImageBlock
                text="give"
                src="https://images.unsplash.com/photo-1465188162913-8fb5709d6d57?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&cs=tinysrgb&w=1500&h=1500&fit=crop&s=967e8a713a4e395260793fc8c802901d"
            />
            <ImageBlock
                text="all"
                src="https://source.unsplash.com/ITjiVXcwVng/1500x1500"
            />
            <ImageBlock
                text="you can"
                src="https://source.unsplash.com/3MNzGlQM7qs/1500x1500"
            />
        </div>
    )
}

export default Main
