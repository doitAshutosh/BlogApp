import React, { useState } from 'react';
import './App.css'; // Import CSS file for styling

export default function App() {
  const [posts, setPosts] = useState([]);
  const [text, setText] = useState('');
  const [editId, setEditId] = useState(null);

  const handlePost = () => {
    if (text.trim() === '') return;

    if (editId !== null) {
      const updatedPosts = posts.map((post) =>
        post.id === editId ? { ...post, content: text } : post
      );
      setPosts(updatedPosts);
      setEditId(null);
    } else {
      const newPost = {
        id: Date.now(),
        content: text,
      };
      setPosts([newPost, ...posts]);
    }
    setText('');
  };

  const handleEdit = (id) => {
    const postToEdit = posts.find((post) => post.id === id);
    setText(postToEdit.content);
    setEditId(id);
  };

  const handleDelete = (id) => {
    const updatedPosts = posts.filter((post) => post.id !== id);
    setPosts(updatedPosts);
    if (editId === id) {
      setText('');
      setEditId(null);
    }
  };

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
            <button onClick={() => handleEdit(post.id)} className="edit-button">
              Edit
            </button>
            <button onClick={() => handleDelete(post.id)} className="delete-button">
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

