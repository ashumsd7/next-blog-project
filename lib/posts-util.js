import fs from "fs";
import path from "path";
import matter from "gray-matter";

const postsDir = path.join(process.cwd(), "posts");

export const getPostData = (fileName) => {
  const filePath = path.join(postsDir, fileName);
  console.log("filePath", filePath);
  const fileContent = fs.readFileSync(filePath, "utf-8");
  //   console.log("fileContent", fileContent);
  const { data, content } = matter(fileContent);
  console.log("data", data);
  const postSlug = fileName.replace(/\.md$/, "");
  const postData = {
    slug: postSlug,
    ...data,
    content: content,
  };
  return postData;
};
export function getAllPosts() {
  const postFiles = fs.readdirSync(postsDir);
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
