import React, { useEffect, useRef, useState } from 'react'
import ReactPlayer from "react-player";



const VideoPlayer = ({ videoUrl }: { videoUrl: string }) => {

    const [isClient, setIsClient] = useState(false)

    useEffect(() => {
        setIsClient(true)
    }, [])


    return (
        <div className='mt-2'>
            {isClient && <ReactPlayer
                width="350px"
                url={videoUrl}
                controls={true}
                light={false}
                pip={false}
            />}
        </div>
    )
}

export default VideoPlayer