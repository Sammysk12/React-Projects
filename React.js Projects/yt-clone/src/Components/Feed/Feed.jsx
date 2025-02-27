import React, { useEffect, useState } from 'react'
import './Feed.css'
import Sidebar from '../Sidebar/Sidebar'
import {API_KEY , valueConverter} from '../../data.js'
import moment from 'moment';

import thumbnail1 from '../../assets/thumbnail1.png'
import { Link } from 'react-router-dom'

const Feed = ({category}) => {

    const [videoList, setVideoList] = useState([]);

    const fetchVideoList = async() =>{
      const videoList_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=US&videoCategoryId=${category}&key=${API_KEY}`;
      await fetch(videoList_url).then(res => res.json()).then(data =>setVideoList(data.items))
    }


    useEffect(()=>{
      fetchVideoList();
    },[category])

  return (
    <div className="feed">

   
        
        {videoList.map((video,index) =>{
          return (
            <Link key={index} to={`video/${video.snippet.categoryId}/${video.id}`} className='card'>
            <img src={video.snippet.thumbnails.medium.url} alt="" />
        <h2>{video.snippet.title}</h2>
        <h3>{video.snippet.channelTitle}</h3>
        <p>{video?valueConverter(video.statistics.viewCount):""}Views &bull; {video?moment(video.snippet.publishedAt).fromNow():""}</p>
        </Link>
          )
        })}
        
    </div>

  )
}

export default Feed