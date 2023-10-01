import React from "react";

const VideoTableRow = ({ video }) => (
  <tr>
    <td>{video.title}</td>
    <td>{video.url}</td>
    <td>
      <img
        style={{ width: "50px", height: "auto" }}
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

export default VideoTableRow;
