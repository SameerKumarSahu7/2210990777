import React, { useEffect, useState } from 'react';
import { getPosts, getComments } from '../api';

const TrendingPosts = () => {
  const [trendingPosts, setTrendingPosts] = useState([]);

  useEffect(() => {
    const fetchTrendingPosts = async () => {
      const posts = await getPosts();
      const comments = await getComments();

      // Calculate comment count per post
      const postCommentCounts = posts.map((post) => ({
        ...post,
        commentCount: comments.filter((comment) => comment.postId === post.id).length,
      }));

      // Find posts with the maximum comment count
      const maxCommentCount = Math.max(...postCommentCounts.map((post) => post.commentCount));
      const trending = postCommentCounts.filter((post) => post.commentCount === maxCommentCount);

      setTrendingPosts(trending);
    };

    fetchTrendingPosts();
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Trending Posts</h2>
      <ul>
        {trendingPosts.map((post) => (
          <li key={post.id} className="mb-2">
            {post.title} - {post.commentCount} comments
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TrendingPosts;