import React from 'react'
import Thumbnail from './Thumbnail'
import LikeButton from './LikeButton'

export default function Video({video}) {
  return (
    <div className='d-flex justify-content-between px-3 align-items-center'>
         
         
        <div className='d-flex align-items-center flex-column flex-sm-row'>
               
                
         <Thumbnail video={video}/>

        <a href={video.url} className='text-decoration-none text-dark ms-3' target="_blank" rel="noreferrer">
        <h3 className='font-monospace'>{video.title}</h3>
        <p className='text-muted text-lead me-1'>{video.description}</p>
        </a>


        </div>

          <LikeButton video={video} className=""/>

    </div>
  )
}
