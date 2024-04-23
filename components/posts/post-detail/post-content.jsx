import React from "react";
import PostHeader from "./post-header";
import classes from "./post-content.module.css";
import ReactMarkdown from "react-markdown";
// const DUMMY_POST = {
//   title: "Getting Started With Next JS",
//   slug: "getting-started-nex-js-2",
//   excerpt:
//     "Lorem Ipsum is simply dummy text of the printing and typesetting industry. L",
//   time: "2023-02-10",
//   image: "getting-started-next-js.png",
//   content: `## Hello, world [hey](https://wwww.www.ww)`,
// };
function PostContent(props) {
  const { post } = props;
  const imagePath = `/images/posts/${post.image}`;
  return (
    <article className={classes.content}>
      <PostHeader title={post.title} image={imagePath} />
      <ReactMarkdown>{post.content}</ReactMarkdown>
    </article>
  );
}

export default PostContent;
