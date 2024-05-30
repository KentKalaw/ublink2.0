import React, { useState } from 'react';
import './Post.css';
import PinnedProfilePic from '../images/gehlee-dangca.jpg';

function Post({ userName, profilePic }) {
  const [postText, setPostText] = useState('');
  const [postImage, setPostImage] = useState(null);
  const [posts, setPosts] = useState([]);
  const [isLikedPinned, setIsLikedPinned] = useState(false);
  const [likesPinned, setLikesPinned] = useState(1467);
  const [showOptionsPerPost, setShowOptionsPerPost] = useState({});

  const handleTextChange = (e) => {
    setPostText(e.target.value);
  };

  const handleImageChange = (e) => {
    setPostImage(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (postText.trim() || postImage) {
      const newPost = {
        id: posts.length + 1,
        userName,
        profilePic,
        text: postText,
        image: postImage ? URL.createObjectURL(postImage) : null,
        date: new Date().toLocaleString(),
        likes: 0, 
        isLiked: false, 
      };
      setPosts([newPost, ...posts]);
      setPostText('');
      setPostImage(null);
      setShowOptionsPerPost({});
    }
  };


  const handleLikePinned = () => {
    if (isLikedPinned) {
      setLikesPinned(likesPinned - 1);
    } else {
      setLikesPinned(likesPinned + 1);
    }
    setIsLikedPinned(!isLikedPinned);
  };

  const handleLike = (postId) => {
    setPosts(posts.map(post => {
      if (post.id === postId) {
        const updatedLikes = post.isLiked ? post.likes - 1 : post.likes + 1;
        return { ...post, likes: updatedLikes, isLiked: !post.isLiked };
      }
      return post;
    }));
  };

  const handleDelete = (postId) => {
    setPosts(posts.filter(post => post.id !== postId));
  };

  return (
    <div className="post-component">
      <div className="pinned-post">
        <div className="post-header">
          <img src={PinnedProfilePic} alt="Profile" className="post-profile-pic" />
          <div>
            <span className="post-user-name">SAEP Admin</span>
            <span className="post-date">Pinned Post</span>
            <i className="pinIcon bi bi-pin-angle-fill"></i>
          </div>
          <div className="post-options">
      <i className="bi bi-three-dots"></i>
    </div>
        </div>
        <p className="post-text">Welcome to the dashboard! Here in UBLink's Alumni home dashboard, you can share your thoughts and stay up-to-date with future events and such.</p>
        <div className="post-actions">
          <i className={`bi ${isLikedPinned ? 'bi-heart-fill heart-filled' : 'bi-heart'}`} onClick={handleLikePinned}></i>
          <span className="like-count"> {likesPinned}</span>
        </div>
      </div>
      <form className="post-form" onSubmit={handleSubmit}>
        <textarea
          className="post-input"
          value={postText}
          onChange={handleTextChange}
          placeholder="What's on your mind?"
        ></textarea>
        <div className="post-button-container">
    <input type="file" className="post-image-input" onChange={handleImageChange} />
    <button type="submit" className="post-submit-btn">Post</button>
  </div>
      </form>
      <div className="posts-list">
        {posts.map((post) => (
          <div key={post.id} className="post-item">
            <div className="post-header">
              <img src={post.profilePic} alt="Profile" className="post-profile-pic" />
              <div>
                <span className="post-user-name">{post.userName}</span>
                <span className="post-date">{post.date}</span>
              </div>
              <div className="post-options">
      <i className="bi bi-three-dots" onClick={() => setShowOptionsPerPost({ ...showOptionsPerPost, [post.id]: !showOptionsPerPost[post.id]})}></i>
      <div className={`options-dropdown ${showOptionsPerPost[post.id] ? 'show' : ''}`}>
  <span className="dropdown-item" onClick={() => handleDelete(post.id)}>
    Delete Post
  </span>
</div>
    </div>
            </div>
            <p className="post-text">{post.text}</p>
            {post.image && <img src={post.image} alt="Post" className="post-image" />}
            <div className="post-actions">
            <i className={`bi ${post.isLiked ? 'bi-heart-fill heart-filled' : 'bi-heart'}`} onClick={() => handleLike(post.id)}></i>
              <span className="like-count"> {post.likes}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Post;
