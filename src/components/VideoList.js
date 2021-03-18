import React from 'react';
import ListItem from "./ListItem";

const VideoList = ({videos, onVideoSelect}) => {

    const list = videos.map(video => {
        return (
                <ListItem
                    key={video.id.videoId}
                    onVideoSelect={onVideoSelect}
                    video={video}
                />
        );
    });

    return <div className={"ui container relaxed divided list"}>{list}</div>
}

export default VideoList;
