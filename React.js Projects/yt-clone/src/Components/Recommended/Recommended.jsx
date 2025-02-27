import React, { useEffect, useState } from 'react'

import'./Recommended.css'


import thumbnail1 from '../../assets/thumbnail1.png'
import { API_KEY, valueConverter } from '../../data';
import { Link } from 'react-router-dom';

const Recommended = ({categoryId}) => {


   const [recommendedVideos, setrecommendedVideos] = useState([]);


   const fetchRecommendedVideos = async() =>{
      const recommendedVideo_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=US&videoCategoryId=${categoryId}&key=${API_KEY}`;
      await fetch(recommendedVideo_url).then(res => res.json()).then(data =>setrecommendedVideos(data.items))
   };


   useEffect(()=>{
      fetchRecommendedVideos();
   },[])

   console.log(recommendedVideos)

  return (
    <div className='recommended'>
      {recommendedVideos.map((recomm, index) =>{
         return (
            <Link to={`/video/${recomm.snippet.categoryId}/${recomm.id}`} key={index} className="side-video-list">
            <img src={recomm.snippet.thumbnails.medium.url} alt="" />
             <div className="vid-info">
                <h4>{recomm.snippet.title}</h4>
                <p>{recomm.snippet.channelTitle}</p>
                <p>{valueConverter(recomm.statistics.viewCount)} Views</p>
             </div>
        </Link>
         )
      })}
        
        
    </div>
  )
}

export default Recommended