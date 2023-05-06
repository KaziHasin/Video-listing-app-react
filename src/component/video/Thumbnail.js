import React from 'react'

export default function Thumbnail({video}) {
  return (
    <div className='my-4'>

        <video width="200" height="120" controls className='rounded'>
        <source src={video.url} type="video/mp4" />
      
        Your browser does not support the video tag.
        </video>

    </div>
  )
}
