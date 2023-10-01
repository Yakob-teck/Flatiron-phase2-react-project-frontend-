import React, { useEffect, useState } from "react";

function VideosList() {
  const [videosList, setVideosList] = useState([]);

  useEffect(() => {
    const fetchVideos = async () => {
      const url = "http://localhost:3000/videos";
      try {
        const response = await fetch(url);
        const jsonData = await response.json();
        setVideosList(jsonData);
      } catch (error) {
        console.error("Error occurred when fetching data");
      }
    };

    fetchVideos();
  }, []);

  const renderVideo = videosList.map((video) => (
    <tr key={video.id}>
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
  ));

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>URL</th>
            <th>Thumbnail</th>
            <th>Duration</th>
            <th>Views</th>
            <th>Likes</th>
            <th>Dislikes</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>{renderVideo}</tbody>
      </table>
    </div>
  );
}

export default VideosList;
