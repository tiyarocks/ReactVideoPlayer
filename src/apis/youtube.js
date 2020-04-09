import axios from "axios"
const KEY="AIzaSyAcXw82FjVjZbYFy3-kdpr3pGxvMAD02XE"

//preconfigured instance of axios
export default axios.create({
    baseURL:"https://www.googleapis.com/youtube/v3",
    params:{
        part:"snippet",
        maxResults:5,
        key:KEY,
        
    }
})
