import React, { useEffect, useState } from "react";
import VideoTableRow from "./VideoTableRow";

function VideosList() {
  const [videosList, setVideosList] = useState([]);
  const [searchInput, setSearchInput] = useState("");

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

  const filteredVideos = videosList.filter((video) => {
    const lowerCasedTitle = video.title.toLowerCase();
    return lowerCasedTitle.includes(searchInput.toLowerCase());
  });

  const handleSearchChange = (event) => {
    setSearchInput(event.target.value);
  };

  const renderVideo = filteredVideos.map((video) => (
    <VideoTableRow video={video} key={video.id} />
  ));

  return (
    <div>
      <input
        type="text"
        placeholder="Search by title..."
        value={searchInput}
        onChange={handleSearchChange}
      />
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
