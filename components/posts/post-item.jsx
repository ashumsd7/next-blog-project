import Image from "next/image";
import Link from "next/link";
import React from "react";
import classes from "./post-item.module.css";
function PostItem(props) {
  const { post } = props;
  const { title, image, excerpt, date, slug } = post;

  const formattedDate = new Date(date).toLocaleDateString("en-Us", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const fullImagePath = `/images/posts/${image}`;
  const postLinkPath = `/posts/${slug}`;
  console.log("fullImagePath", fullImagePath);
  return (
    <li className={classes.post}>
      <Link href={postLinkPath}>
        <div className={classes.image}>
          <Image
            src={fullImagePath}
            layout="responsive"
            alt={title}
            width={"300"}
            height={"200"}
          />
        </div>
        <div className={classes.cotent}>
          <h3>{title}</h3>
          <time>{formattedDate}</time>
          <p>{excerpt}</p>
        </div>
      </Link>
    </li>
  );
}

export default PostItem;
