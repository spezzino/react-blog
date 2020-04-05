import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { useLocation } from "react-router-dom";
import { PostItem } from "../components/PostItem";
import api from "../api";
import { CommentItem } from "../components/CommentItem";
import { List } from "../components/List";

const SinglePost = (props: any) => {
  const { isSingle } = props;

  const {
    state: { id, title, user, body },
  } = useLocation();

  const [comments, setComments] = useState<Comment[] | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const comments = await api.getCommentsForPost(id);
        setComments(comments);
      } catch (_) {
        setError("error loading comments");
      }
    };

    fetchData();
  }, [id]);

  const renderComments = () => {
    if (error) {
      return <div>{error}</div>;
    } else if (comments === null) {
      return <div>Loading comments...</div>;
    } else if (comments.length) {
      return <List items={comments} component={CommentItem} />;
    } else {
      return <div>No comments</div>;
    }
  };

  return (
    <div>
      <PostItem {...{ id, title, user, body }} showMoreButton={!isSingle} />
      {renderComments()}
    </div>
  );
};

SinglePost.propTypes = {
  isSingle: PropTypes.bool.isRequired,
};

export { SinglePost };
