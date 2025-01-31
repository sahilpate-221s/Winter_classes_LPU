import React, { useEffect } from 'react';
import { useState } from 'react';
import VideosCard from '../components/VideosCard';
import './Youtube.css';
import NavBar from '../components/NavBar';

const options = {
    headers: {
           'x-rapidapi-key': '4873f19498msh6f4de67b5626175p14c464jsnc00dc4a06f5f',
		'x-rapidapi-host': 'youtube-v2.p.rapidapi.com'
    }
};

const fetchVideos = async (searchTerm = b) => {
    try {

        const response = await fetch(`https://youtube-v2.p.rapidapi.com/search/?query=${searchTerm}`, options);
        if (response.ok) {
            const data = await response.json();
            console.log(data.videos);
            return data.videos;
        }
    } catch (e) {
        console.log(error);
        return [];
    }
}

const Youtube = () => {
    const [videos, setVideos] = useState([]);

    const handleSearch =  (searchTerm) =>{
        const searchVideos = async()=>{
            const videoData = await fetchVideos(searchTerm);
            setVideos(videoData);
        }
        searchVideos(videos);
    }

    useEffect(() => {
        const getVideos = async () => {
            const videosData = await fetchVideos();
            setVideos(videosData);
        }
        // getVideos()
    }, [])

    return (
        <div className='youtube-container'>
            <h1>Youtube</h1>
            {<NavBar onSearch={handleSearch} />} 
            <div className='video-container'></div>
            {videos && videos.map((video) => {
                <VideosCard key={video.video_id} video={video} />

            })}
        </div>

    );
};

export default Youtube;





