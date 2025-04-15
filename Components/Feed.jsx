import React, { useEffect, useState } from 'react';
import { getPosts } from '../api';

const Feed = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const posts = await getPosts();
      setPosts(posts);
    };

    fetchPosts();
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Feed</h2>
      <ul>
        {posts.map((post) => (
          <li key={post.id} className="mb-2">
            {post.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Feed;