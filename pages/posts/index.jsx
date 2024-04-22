import React from "react";
import { DUMMY_POSTS } from "..";
import AllPostsSection from "@/components/posts/all-post";

function AllPosts() {
  return <AllPostsSection posts={DUMMY_POSTS}></AllPostsSection>;
}

export default AllPosts;
