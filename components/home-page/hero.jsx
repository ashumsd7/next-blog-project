import React from "react";
import classes from "./hero.module.css";
import Image from "next/image";
function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src="/images/site/hero-dp-1.png"
          alt="Hero Image"
          width={"300"}
          height={"300"}
        />
      </div>
      <h1>Hi, I'm Ashutosh.</h1>
      <p>I blog about web development- Frontend techs</p>
    </section>
  );
}

export default Hero;
