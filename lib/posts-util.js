import fs from "fs";
import path from "path";
import matter from "gray-matter";

const postsDir = path.join(process.cwd(), "posts");

const getPostData = (fileName) => {
  const filePath = path.join(postsDir, fileName);
  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(fileContent);
  const postSlug = fileName.replace(/\.md$/, "");
  const postData = {
    slug: postSlug,
    ...data,
    content: content,
  };
};
function getAllPosts() {
  const postFiles = fs.readdirSync(postsDir);
  const allPosts = postFiles.map((postFile) => {
    return getPostData(postFile);
  });
  const sortedArr = allPosts.sort((a, b) => (a.date > b.date ? -1 : 1));

  return sortedArr;
}

function getFeaturedPosts() {
  const allPosts = getAllPosts();
  const featuredPosts = allPosts.filter((post) => post.isFeatured);
  return featuredPosts;
}
