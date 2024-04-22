import React from "react";
import classes from "./post-header.module.css";
import Image from "next/image";
function PostHeader(props) {
  return (
    <header className={classes.header}>
      <h1>{props.title}</h1>
      <Image alt={props.title} src={props.classes} width={"200"} height="150" />
    </header>
  );
}

export default PostHeader;
