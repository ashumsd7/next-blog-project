import Image from "next/image";
import Link from "next/link";
import React from "react";
import classes from "./post-item.module.css";
function PostItem(props) {
  const { post } = props;
  return (
    <li className={classes.post}>
      <Link>
        <div className={classes.image}>
          <Image />
        </div>
        <div className={classes.cotent}>
          <h3>title</h3>
          <time>Time</time>
          <p>The desc</p>
        </div>
      </Link>
    </li>
  );
}

export default PostItem;
