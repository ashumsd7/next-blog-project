import React from "react";
import classes from "./feature-posts.module.css";
import PostsGrid from "../posts/posts-grid";
function FeaturePosts(props) {
  console.log("props 2", props);
  return (
    <section className={classes.latest}>
      <h2>Feature Posts</h2>
      <PostsGrid posts={props.posts} />
    </section>
  );
}

export default FeaturePosts;
