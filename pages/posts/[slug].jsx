import PostContent from "@/components/posts/post-detail/post-content";
import { getPostData, getPostFiles } from "@/lib/posts-util";
import React from "react";

export default function EachPost(props) {
  return <PostContent post={props.post}></PostContent>;
}

export function getStaticProps(context) {
  const { params } = context;
  const { slug } = params;

  const post = getPostData(slug);
  return {
    props: {
      post: post,
    },
    revalidate: 600,
  };
}

export function getStaticPaths() {
  const fileNames = getPostFiles();
  const slugs = fileNames.map((file) => file.replace(/\.md$/, ""));
  return {
    paths: slugs?.map((slug) => {
      return {
        params: {
          slug: slug,
        },
      };
    }),
    fallback: false,
  };
}
