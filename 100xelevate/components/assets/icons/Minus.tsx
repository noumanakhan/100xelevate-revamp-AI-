import React from 'react'

function Minus({ color = "white" }: { color?: string }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="10" height="18" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-minus-icon lucide-minus"><path d="M5 12h14" /></svg>
    )
}

export default Minus