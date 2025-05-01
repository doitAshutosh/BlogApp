import React, { useState } from 'react';
import './App.css'; // Import CSS file for styling
import Login from './Login'; // Import the Login component

 export default function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [posts, setPosts] = useState([]);
  const [text, setText] = useState('');
  const [editId, setEditId] = useState(null);

  const handleLogin = () => {
    setLoggedIn(true);
  };

  const handlePost = () => {
    if (text.trim() === '') {
      alert('Please write something before posting!');
      return;
    }

    if (editId !== null) {
      const updatedPosts = posts.map((post) =>
        post.id === editId ? { ...post, content: text, time: new Date().toLocaleString() } : post
      );
      setPosts(updatedPosts);
      setEditId(null);
      alert('Post updated successfully!');
    } else {
      const newPost = {
        id: Date.now(),
        content: text,
        time: new Date().toLocaleString(),
      };
      setPosts([newPost, ...posts]);
      alert('Post added successfully!');
    }
    setText('');
  };

  const handleEdit = (id) => {
    const postToEdit = posts.find((post) => post.id === id);
    setText(postToEdit.content);
    setEditId(id);
  };

  const handleDelete = (id) => {
    const confirmed = window.confirm("Are you sure you want to delete this post?");
    if (!confirmed) return;

    const updatedPosts = posts.filter((post) => post.id !== id);
    setPosts(updatedPosts);
    if (editId === id) {
      setText('');
      setEditId(null);
    }
    alert("Post deleted successfully!");
  };

  if (!loggedIn) {
    return <Login onLogin={handleLogin} />;
  }

  return (
    <div className="container">
      <h1>📝 Blog App</h1>
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Write your idea here..."
        className="textarea"
      />
      <br />
      <button onClick={handlePost} className="post-button">
        {editId ? 'Update Post' : 'Post Idea'}
      </button>

      <div className="posts">
        {posts.length === 0 && <p>No posts yet. Start writing!</p>}
        {posts.map((post) => (
          <div key={post.id} className="post">
            <p>{post.content}</p>
            <div className= "post-footer">
            <span className="post-time">{post.time}</span>
            <div className="post-buttons">
            <button onClick={() => handleEdit(post.id)} className="edit-button">
              Edit
            </button>
            <button onClick={() => handleDelete(post.id)} className="delete-button">
              Delete
            </button>
          </div>
        ))
          </div>
          </div>
        ))}
      </div>
    </div>
  );
}

