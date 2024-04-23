import Layout from "@/components/layout/layout";
import "@/styles/globals.css";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
        <title>Hey bloggers</title>
        <meta name="viewport content=etc...." />
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
}
