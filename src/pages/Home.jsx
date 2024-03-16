import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <p>
        Want to see the posts?{" "}
        <Link to="/posts" style={{ textDecoration: "underline" }}>
          See Posts
        </Link>
      </p>
    </div>
  );
};

export default Home;
