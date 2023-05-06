import React, {useState, useEffect, createContext} from 'react'
import SearchInput from './SearchInput';
import VideoList from './VideoList'
import { Link } from 'react-router-dom'

export const VideoContext = createContext();



export default function Videos() {
   
  const [videos, setVideos] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [foundVideos, setFoundVideos] = useState([]);
   
  

  useEffect(() => {
    const filterVideos = async (videos, searchText) => {
      return await videos.filter(video =>
        video.title.toLowerCase().includes(searchText.toLowerCase())
      );
    };
  
    const search = async () => {
       const result = await filterVideos(videos, searchText);

       setFoundVideos(result)
     
    };
    
    
    search();
  }, [searchText, videos]);
  
 

  useEffect(() => {

    const fetchVideos = async () => {
      try {
        const res = await fetch('http://localhost:5000/videoData');
        const data = await res.json();
        setVideos(data);
      } catch (error) {
        console.error('Error fetching videos:', error);
      }
    }

    fetchVideos();
   
    
  
   
  }, []);

  

  const fetchVideo = async (id) => {
    try {
      const res = await fetch(`http://localhost:5000/videoData/${id}`);
      const data = await res.json();
      
      return data;
    } catch (error) {
      console.error('Error fetching videos:', error);
    }
  }

  

  const handleLike = async (id, like) =>{

    const singleVideo = await fetchVideo(id);

    const udateVideo = {...singleVideo, like: like} 

   
    try {

      const res = await fetch(`http://localhost:5000/videoData/${id}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json'
          },
          
          body: JSON.stringify(udateVideo)

      });

      const data = await res.json();

     
      setVideos((prevVideos) =>
        prevVideos.map((video) => (video.id === data.id ? data : video))
      );
      
    } catch (error) {
      console.error(`Error updating video ${id} like count:`, error);
    }

  }
  

  return (
    <VideoContext.Provider value={{ handleLike }}>
            
        <div className="container mt-5 ">

        
             
             <div className="row mt-5">
                 
                 <div className="col-md-8 offset-md-2 position-relative">
                 <Link to="/" className='position-absolute' style={{top: '15px', left: '40px', zIndex: '1'}}><i className="fa-solid fa-arrow-left"></i></Link>
                    <div className="card bg-white py-3 pt-5" style={{borderRadius: "20px"}}>

                   
                    
                     <SearchInput
                      value={searchText}
                      onChange={newText => setSearchText(newText)} />


                      {foundVideos ? <VideoList videos={foundVideos} emptyHeading={foundVideos.length > 0 ? "" : `No video found ${searchText}`}/>:
                    
                      <VideoList videos={videos} emptyHeading=""/>

                      }

                    </div>

                 </div>

             </div>

          </div>


    </VideoContext.Provider>
  )
}

