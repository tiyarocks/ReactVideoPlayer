import React from "react"
import SearchBar from "./SearchBar"
import youtube from "../apis/youtube"
import VideoDetail from "./VideoDetail"
import VideoList from "./VideoList"


class App extends React.Component{
    state={videos:[],selectedVideo:null}


    componentDidMount(){
        this.onTermSubmit("buildings")
    }
    onTermSubmit= async term => {
        //async api request
        //youtube is now a pre-configured instance of axios
        const response=await youtube.get("/search" ,{
            params:{
                part:"snippet",
                maxResults:5,
                q:term,
                key:"AIzaSyAcXw82FjVjZbYFy3-kdpr3pGxvMAD02XE"
            }
        })
        console.log(response)
        
        //take the list of vdos and set them as state on our App component
        this.setState({
            videos:response.data.items,
            selectedVideo:response.data.items[0]
        })
    }
//obj that we fetch from the u tube api:video
    onVideoSelect=video=>{
        this.setState({
            selectedVideo:video
        })
        
    }
    render(){
        return(
            <div className="ui container">
                <SearchBar onFormSubmit={this.onTermSubmit}/>
                <div className="ui grid">
                    <div className="ui row">
                        <div className="eleven wide column">
                            <VideoDetail video={this.state.selectedVideo}/>
                        </div>
                        <div className="five wide column">
                            <VideoList onVideoSelect={this.onVideoSelect} videos={this.state.videos}/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default App