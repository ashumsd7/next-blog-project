import React from "react";
import Logo from "./logo";
import Link from "next/link";

function MainNavigation() {
  return (
    <header>
      <Link href={"/"}>
        <Logo />
      </Link>
      <nav>
        <ul>
          <li>
            <Link href="/posts">Posts</Link>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
