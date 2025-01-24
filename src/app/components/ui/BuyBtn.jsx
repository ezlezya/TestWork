import React, { useState } from 'react'

export default function BuyBtn({ product, addToCart }) {
    const [mouseScale, setMouseScale] = useState(false)

    const onMouseDown = () => {
        setMouseScale(true)
    }
    const onMouseUp = () => {
        setMouseScale(false)
    }

    return (
        <button
            onClick={() => addToCart(product)}
            onMouseDown={onMouseDown}
            onMouseLeave={onMouseUp}
            onMouseUp={onMouseUp}
            className={`px-3 py-1 border-[1px] border-gray-800 rounded ${mouseScale ? 'scale-90' : ""} hover:bg-green-400 transition-all duration-150`}>Купити</button>
    )
}
