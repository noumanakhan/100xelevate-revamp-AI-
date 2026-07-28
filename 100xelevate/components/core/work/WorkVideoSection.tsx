import React from 'react'

function WorkVideoSection({ video }: { video: string }) {
    return (
        <div className="w-full  h-full relative">
            <video src={video} className="w-full h-full object-cover" autoPlay muted loop />
        </div>
    )
}

export default WorkVideoSection