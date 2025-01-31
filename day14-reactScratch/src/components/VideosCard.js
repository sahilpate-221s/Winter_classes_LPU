import './VideosCard.css';
import React from 'react';
const VideosCard = () => {
    return(
        <>
            <img src={video.thumbnail[0].url} alt='image1'/>
            <h3>{video.title}</h3>
            <p><strong>Description: {video.description}</strong></p>
            <p><strong>Author: {video.author}</strong></p>
            <p><strong>Views: {video.number_of_views}</strong></p>
            <p><strong>Published: {video.published_time}</strong></p>
            <p><strong>Length: {video.video_length}</strong></p>
        </>

    );
};

export default VideosCard;
