import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Postdetails.css";

const API_URL = "http://localhost:7000/api/router"; // 👈 Correct backend URL

const Postdetails = () => {
  const [posts, setPosts] = useState([]);
  const [formData, setFormData] = useState({
    title: "",
    des: "",
    cost: "",
    image: null,
  });

  // Fetch all posts
  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const res = await axios.get(`${API_URL}/get`);
      setPosts(res.data.data);
    } catch (error) {
      console.error("Fetch Error:", error);
    }
  };

  // Handle input change
  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "image") {
      setFormData({ ...formData, image: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  // Submit new post
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = new FormData();
      data.append("title", formData.title);
      data.append("des", formData.des);
      data.append("cost", formData.cost);
      data.append("image", formData.image);

      const res = await axios.post(`${API_URL}/post`, data, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      setPosts([...posts, res.data.data]);
      setFormData({ title: "", des: "", cost: "", image: null });
    } catch (error) {
      console.error("Submit Error:", error);
    }
  };

  // Delete post
  const handleDelete = async (id) => {
    try {
      await axios.delete(`${API_URL}/${id}`);
      setPosts(posts.filter((post) => post._id !== id));
    } catch (error) {
      console.error("Delete Error:", error);
    }
  };

  return (
    <div className="postdetails">
      <h2 className="page-title">Manage Posts</h2>

      {/* ✅ Add Post Form */}
      <form className="post-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={formData.title}
          onChange={handleChange}
          required
        />
        <textarea
          name="des"
          placeholder="Description"
          value={formData.des}
          onChange={handleChange}
        ></textarea>
        <input
          type="number"
          name="cost"
          placeholder="Cost"
          value={formData.cost}
          onChange={handleChange}
        />
        <input
          type="file"
          name="image"
          accept="image/*"
          onChange={handleChange}
          required
        />
        <button type="submit" className="submit-btn">
          Add Post
        </button>
      </form>

      {/* ✅ Posts List */}
      <div className="posts-grid">
        {posts.length === 0 ? (
          <p>No posts available</p>
        ) : (
          posts.map((post) => (
            <div className="card" key={post._id}>
              <img
                src={`http://localhost:7000/uploads/${post.image}`}
                alt={post.title}
                className="card-img"
              />
              <div className="card-body">
                <h3 className="card-title">{post.title}</h3>
                <p className="card-des">{post.des}</p>
                <p className="card-cost">💰 {post.cost} /-</p>
                <div className="card-actions">
                  <button
                    className="delete-btn"
                    onClick={() => handleDelete(post._id)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Postdetails;
