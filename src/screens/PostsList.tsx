import React, { useState, useEffect } from "react";
import { PostItem } from "../components/PostItem";
import { List } from "../components/List";
import api from "../api";

const PostsList = (props: any) => {
  const [posts, setPosts] = useState<PostWithUser[] | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const setUserToPost = (
      users: User[] | null,
      posts: Post[] | null
    ): PostWithUser[] | null => {
      if (users && posts) {
        const sortedUsers: User[] = users.sort((a: User, b: User) =>
          a.id < b.id ? -1 : 1
        );
        const postsWithUser: PostWithUser[] = posts.map((p: Post) => ({
          ...p,
          user: sortedUsers[p.userId - 1],
        }));
        return postsWithUser;
      }
      return null;
    };

    const fetchData = async () => {
      try {
        const posts = await api.getPosts();
        const users = await api.getUsers();
        setPosts(setUserToPost(users, posts));
      } catch (_) {
        setError("error loading posts");
      }
    };

    fetchData();
  }, []);

  const renderContent = () => {
    if (error) {
      return <div>{error}</div>;
    } else if (!posts) {
      return <div>Loading...</div>;
    } else {
      return <List items={posts} component={PostItem} />;
    }
  };

  return <div>{renderContent()}</div>;
};

export default PostsList;
