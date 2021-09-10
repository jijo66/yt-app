import axios from 'axios';

const KEY= 'AIzaSyDlQZLIdUG5kPM227UjV0zEYLgYr8jI_S8';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params:{
    part: 'snippet',
    type:'video',
    maxResults:5,
    key: KEY
  }

});
