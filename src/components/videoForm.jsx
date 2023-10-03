import React, { useState } from "react";
import "./videoForm.css";
const VideoForm = ({ addVideo }) => {
  const [formData, setFormData] = useState({
    title: "",
    url: "",
    thumbnail: "",
    duration: "",
    views: 0,
    likes: 0,
    dislikes: 0,
    description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:3000/videos", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        setFormData({
          title: "",
          url: "",
          thumbnail: "",
          duration: "",
          views: 0,
          likes: 0,
          dislikes: 0,
          description: "",
        });
        addVideo(data);
      })
      .catch((error) => {
        console.error("Error occurred when adding a new video:", error);
      });
  };

  return (
    <div>
      <h2>Add New Video</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title:</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>URL:</label>
          <input
            type="text"
            name="url"
            value={formData.url}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit">Add Video</button>
      </form>
    </div>
  );
};

export default VideoForm;
