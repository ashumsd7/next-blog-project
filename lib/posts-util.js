import fs from "fs";
import path from "path";
import matter from "gray-matter";

const postsDir = path.join(process.cwd(), "posts");

export const getPostData = (postIdentifier) => {
  const postSlug = postIdentifier.replace(/\.md$/, "");
  const filePath = path.join(postsDir, `${postSlug}.md`);
  console.log("filePath", filePath);
  const fileContent = fs.readFileSync(filePath, "utf-8");
  //   console.log("fileContent", fileContent);
  const { data, content } = matter(fileContent);
  console.log("data", data);

  const postData = {
    slug: postSlug,
    ...data,
    content: content,
  };
  return postData;
};

export const getPostFiles = () => {
  return fs.readdirSync(postsDir);
};
export function getAllPosts() {
  const postFiles = getPostFiles();
  //   console.log("postFiles", postFiles);
  const allPosts = postFiles.map((postFile) => {
    return getPostData(postFile);
  });
  const sortedArr = allPosts.sort((a, b) => (a.date > b.date ? -1 : 1));

  return sortedArr;
}

export function getFeaturedPosts() {
  console.log("ok giving featured posts");
  const allPosts = getAllPosts();
  //   console.log("allPosts", allPosts);
  const featuredPosts = allPosts.filter((post) => post);
  //   console.log("featuredPosts", featuredPosts);
  return featuredPosts;
}
