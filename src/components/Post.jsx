import React from "react";
import { Link, useParams, useSearchParams } from "react-router-dom";

const data = [
  { id: 1, title: "Post Title 1", body: "Descriptions 1" },
  { id: 2, title: "Post Title 2", body: "Descriptions 2" },
  { id: 3, title: "Post Title 3", body: "Descriptions 3" },
];

const Post = () => {
  const params = useParams(); // {id:1,2,3}
  const post = data.find((post) => post.id === Number(params.id));

  const [searchParams, setSearchParams] = useSearchParams();
  return (
    <div>
      <h1>Post: {post.id}</h1>
      <p>{post.title}</p>
      <p>{post.body}</p>
      <button
        onClick={() => {
          setSearchParams({ name: "sina" });
        }}
      >
        update query
      </button>
      <Link to="/posts" style={{ textDecoration: "underline" }}>
        Back to posts
      </Link>
    </div>
  );
};

export default Post;
