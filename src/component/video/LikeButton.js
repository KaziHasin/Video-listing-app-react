import React, { useContext } from 'react';
import {VideoContext} from './Videos';


export default function LikeButton({video}) {

  const { handleLike } = useContext(VideoContext);

  return (
  //   <button type="button" className="btn btn-secondary btn-sm align-self-end align-self-sm-center mb-3 mb-sm-0" data-bs-toggle="tooltip" data-bs-placement="top" title={`Like this video ${video.like}`} onClick={() => handleLike(video.id, video.like+1)}>
  //     <i className="fa-regular fa-heart"></i>
  //  </button>


  <button type="button" className={`btn ${video.like ? 'btn-primary' : 'btn-secondary'} btn-sm align-self-end align-self-sm-center mb-3 mb-sm-0`} data-bs-toggle="tooltip" data-bs-placement="top" title={`${video.like ? 'You have liked this video': 'Please like the video'}`} onClick={() => handleLike(video.id, !video.like)}>
  <i className="fa-regular fa-heart"></i>
</button>

  )
}
