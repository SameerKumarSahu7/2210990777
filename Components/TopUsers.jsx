import React, { useEffect, useState } from 'react';
import { getUsers, getComments } from '../api';

const TopUsers = () => {
  const [topUsers, setTopUsers] = useState([]);

  useEffect(() => {
    const fetchTopUsers = async () => {
      const users = await getUsers();
      const comments = await getComments();

      // Calculate comment count per user
      const userCommentCounts = users.map((user) => ({
        ...user,
        commentCount: comments.filter((comment) => comment.userId === user.id).length,
      }));

      // Sort users by comment count and get top 5
      const sortedUsers = userCommentCounts.sort((a, b) => b.commentCount - a.commentCount).slice(0, 5);
      setTopUsers(sortedUsers);
    };

    fetchTopUsers();
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Top Users</h2>
      <ul>
        {topUsers.map((user) => (
          <li key={user.id} className="mb-2">
            {user.name} - {user.commentCount} comments
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TopUsers;