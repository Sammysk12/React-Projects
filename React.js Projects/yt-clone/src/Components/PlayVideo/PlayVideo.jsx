import React, { useEffect, useState } from 'react'
import { API_KEY, valueConverter } from '../../data'
import moment from 'moment'



import'./PlayVideo.css'


import video1 from '../../assets/video.mp4'
import like from '../../assets/like.png'
import dislike from '../../assets/dislike.png'
import share from '../../assets/share.png'
import save from '../../assets/save.png'
import jack from '../../assets/jack.png'
import user_profile from '../../assets/user_profile.jpg'
import { useParams } from 'react-router-dom'








const PlayVideo = () => {

    const {videoId} = useParams();

    //to store the video data like video title, viewCount, published date, likecount, comment count and many more
    const [videoData, setVideoData] = useState(null);

    //to store the channel data like channel logo and no. of subscribers, etc.
    const [channelData, setChannelData] = useState(null);

    //to store the video comments which is specific to a video
    const [commentData, setCommentData] = useState([]);



    const fetchVideoData = async() =>{
        //Fetching the video data using video ID
        const videoDetails_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${API_KEY}`

        await fetch(videoDetails_url).then(res => res.json()).then(data => setVideoData(data.items[0]))
    }


    const fetchChannelData = async () =>{
        //Fetching the channel data using the channel ID
        const channelDetails_url = `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${videoData.snippet.channelId}&key=${API_KEY}`;

        await fetch(channelDetails_url).then(res =>res.json()).then(data => setChannelData(data.items[0]));
    }


    const fetchCommentData = async() =>{
        //Fetching the comment data for a specific video
        const commentDetails_url = `https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&maxResults=50&videoId=${videoId}&key=${API_KEY}`;
        await fetch(commentDetails_url).then(res => res.json()).then(data => setCommentData(data.items))

    }

    
    useEffect(()=>{
        fetchVideoData();
        fetchCommentData();
    }, [videoId])

    useEffect(()=>{
        fetchChannelData();

    }, [videoData])

  

    

  return (
    <div className='play-video'>
        {/* <video src={video1} controls autoPlay muted></video> */}
        <iframe  src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}  frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        <h3>{videoData?videoData.snippet.title:"Title Here"}</h3>
        <div className="play-video-info">
            <p>{videoData?valueConverter(videoData.statistics.viewCount):"No Views"} Views &bull; {videoData?moment(videoData.snippet.publishedAt).fromNow():""}</p>
            <div>
                <span><img src={like} alt="" />{videoData?valueConverter(videoData.statistics.likeCount):""}</span>
                <span><img src={dislike} alt="" /></span>
                <span><img src={share} alt="" />Share</span>
                <span><img src={save} alt="" />Save</span>
            </div>
        </div>
    <hr />
    <div className="publisher">
        <img src={channelData?channelData.snippet.thumbnails.default.url:""} alt="" />
        <div>
            <p>{videoData?videoData.snippet.channelTitle:""}</p>
            <span>{channelData?valueConverter(channelData.statistics.subscriberCount)+" Subscribers":""}</span>

        </div>
        <button>Subscribe</button>
    </div>

    <div className="vid-description">
        <p>{videoData?(videoData.snippet.description).slice(0,50):"Description Here"}</p>
        <p>Subscribe to my channel</p>
        <hr />
        <h4>{videoData?valueConverter(videoData.statistics.commentCount)+" Comments":"No Comments"}</h4>
        
        {commentData.map((comment, index) =>{
            return (<div className="comment" key={index}>
            <img src={comment?comment.snippet.topLevelComment.snippet.authorProfileImageUrl:""} alt="" />
            <div>
                <h3>{comment?comment.snippet.topLevelComment.snippet.authorDisplayName:""} <span>{comment?moment(comment.snippet.topLevelComment.snippet.publishedAt).fromNow():""} </span></h3>
                <p>{comment?comment.snippet.topLevelComment.snippet.textDisplay:""}</p>

            
            <div className="comment-action">
                <img src={like} alt="" />
                <span>{comment?comment.snippet.topLevelComment.snippet.likeCount:""}</span>
                <img src={dislike} alt="" />
                
            </div>
            </div>
        </div> 
            )
        })}
        
        
        
    </div>
    </div>
  )
}

export default PlayVideo