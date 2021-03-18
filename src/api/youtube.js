import axios from 'axios';

const KEY = 'AIzaSyA2E91sZ58b19huDRc5TeGXHxFforBbtYA';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        type: 'video',
        key: KEY
    }
});

