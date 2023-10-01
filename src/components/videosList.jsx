import React, { useEffect, useState } from "react";
import VideoTableRow from "./VideoTableRow";
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
    <VideoTableRow video={video} key={video.id} />
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
