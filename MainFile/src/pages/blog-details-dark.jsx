import Head from "next/head";
import RootLayout from "@/components/common/layout/RootLayout";
import BlogDetails1 from "@/components/blog/BlogDetails1";
import BlogRelated from "@/components/blog/BlogRelated";
import DigitalAgencyCTA from "@/components/cta/DigitalAgencyCTA";

const BlogDetailsDark = () => {
  return (
    <>
      <Head>
        <title>Blog Details Dark</title>
        <meta name="description" content="Blog Details Dark Description" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        <RootLayout header="header3" footer="footer3" defaultMode="dark">
          <BlogDetails1 />
          <BlogRelated />
          <DigitalAgencyCTA />
        </RootLayout>
      </main>
    </>
  );
};

export default BlogDetailsDark;
