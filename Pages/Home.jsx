import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-4">Social Media Analytics</h1>
      <nav>
        <Link to="/top-users" className="block mb-2 text-blue-500">Top Users</Link>
        <Link to="/trending-posts" className="block mb-2 text-blue-500">Trending Posts</Link>
        <Link to="/feed" className="block text-blue-500">Feed</Link>
      </nav>
    </div>
  );
};

export default Home;