import React from "react";
import { DUMMY_POSTS } from "..";
import AllPostsSection from "@/components/posts/all-post";
import { getAllPosts } from "@/lib/posts-util";

function AllPosts(props) {
  return <AllPostsSection posts={props.posts}></AllPostsSection>;
}

export default AllPosts;

export function getStaticProps() {
  const posts = getAllPosts();
  return {
    props: {
      posts: posts,
    },
  };
}
