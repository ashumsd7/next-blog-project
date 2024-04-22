import React from "react";
import PostHeader from "./post-header";
import classes from "./post-content.module.css";
const DUMMY_POST = {
  title: "Getting Statted with next js",
  slug: "getting-started-nex-js-2",
  excerpt:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. L",
  time: "2023-02-10",
  image: "getting-started-next-js.png",
  content: `## Hello, world [hey](https://wwww.www.ww)`,
};
function PostContent() {
  const imagePath = `/images/posts/${DUMMY_POST.image}`;
  return (
    <article>
      <PostHeader title={DUMMY_POST.title} image={imagePath} />
    </article>
  );
}

export default PostContent;
