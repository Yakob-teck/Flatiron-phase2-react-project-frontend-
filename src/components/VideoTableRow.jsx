import React from "react";

function VideoTableRow({ video, playVideo }) {
  const handleVideoClick = () => {
    playVideo(video.url);
  };
  return (
    <tr>
      <td>{video.title}</td>
      <td>
        <a href="#" onClick={handleVideoClick} className="video-url">
          {video.url}
        </a>
      </td>
      <td>
        <img
          style={{ width: "30px", height: "auto" }}
          src={video.thumbnail}
          alt={video.title}
        />
      </td>
      <td>{video.duration}</td>
      <td>{video.views}</td>
      <td>{video.likes}</td>
      <td>{video.dislikes}</td>
      <td>{video.description}</td>
    </tr>
  );
}

export default VideoTableRow;
