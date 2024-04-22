import FeaturePosts from "@/components/home-page/feature-posts";
import Hero from "@/components/home-page/hero";
import { getFeaturedPosts } from "@/lib/posts-util";

export const DUMMY_POSTS = [
  {
    title: "Getting Statted with next js",
    slug: "getting-started-next-js",
    excerpt:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. L",
    time: "2022-02-10",
    image: "getting-started-next-js.png",
  },
  {
    title: "Getting Statted with next js",
    slug: "getting-started-nex-js-2",
    excerpt:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. L",
    time: "2023-02-10",
    image: "getting-started-next-js.png",
  },
  {
    title: "Getting Statted with next js",
    slug: "getting-started-nex-js-4",
    excerpt:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. L",
    time: "2021-02-10",
    image: "getting-started-next-js.png",
  },
  {
    title: "Getting Statted with next js",
    slug: "getting-started-nex-js-2",
    excerpt:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. L",
    time: "2022-08-10",
    image: "getting-started-next-js.png",
  },
];
export default function Home(props) {
  console.log("props", props);
  return (
    <>
      <Hero />
      <FeaturePosts posts={props.posts} />
    </>
  );
}

export function getStaticProps() {
  const featuredPosts = getFeaturedPosts();
  return {
    props: {
      posts: featuredPosts,
    },
    revalidate: 60,
  };
}
