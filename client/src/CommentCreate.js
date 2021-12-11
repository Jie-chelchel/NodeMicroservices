import React, { useState } from "react";
import axios from "axios";
import CommentList from "./CommentList";

function ContentCreate({ postId }) {
  const [content, setContent] = useState("");
  console.log(postId);
  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.post(`http://localhost:4001/posts/${postId}/comments`, {
      content,
    });
    setContent("");
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label>New Comment</label>
          <input
            className="form-control"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </div>
        <button className="btn btn-primary">Submit</button>
        <CommentList />
      </form>
    </div>
  );
}

export default ContentCreate;