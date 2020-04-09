import React from "react"
import "./VideoItem.css"
const VideoItem=({video,onVideoSelect})=>{
    return(//when user clicks on a videoitem we invoke that callback which sends some communication back toApp
        <div onClick={()=>onVideoSelect(video)}className="video-item item">
            <img 
                alt={video.snippet.title} 
                className="ui image" 
                src={video.snippet.thumbnails.medium.url}
            />
            <div className="content">
              <div className="header"> {video.snippet.title}</div> 
            </div>
        </div>
    )
}
export default VideoItem