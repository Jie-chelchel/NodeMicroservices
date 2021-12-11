import React, { useEffect, useState } from "react";
import axios from "axios";

function CommentList({ postId }) {
  const [comments, setComments] = useState([]);

  const fetchComments = async () => {
    const result = await axios.get(
      `http://localhost:4001/posts/${postId}/comments`
    );
    setComments(result.data);
  };

  useEffect(() => {
    fetchComments();
  }, []);

  const renderedComments = comments.map((comment) => {
    return <li>{comment.content}</li>;
  });

  return (
    <div className="d-flex flex-row flex-wrap justify-content-between">
      {renderedComments}
    </div>
  );
}

export default CommentList;
