import React from 'react'
import Video from './Video'


export default function VideoList({videos, emptyHeading}) {


const count = videos.length
let heading = emptyHeading;

 
  if(count > 0) {
     
    const noun = count >  1 ? 'Videos' : 'Video'

    heading = count +' ' + noun

  }

  return (
    <div>

      <h3 className='mt-3 mb-2 ms-4'>{heading}</h3>

      {videos && Array.isArray(videos) &&
         videos.map(video =>
           <Video key={video.id} video={video}/>
         )
      }
      
    
     
      
     

    </div>
  )
}
