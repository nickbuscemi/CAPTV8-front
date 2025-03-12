import Head from "next/head";
import RootLayout from "@/components/common/layout/RootLayout";
import Blog1 from "@/components/blog/Blog1";
import DigitalAgencyCTA from "@/components/cta/DigitalAgencyCTA";

const Blog = () => {
  return (
    <>
      <Head>
        <title>Blog</title>
        <meta name="description" content="Blog Description" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        <RootLayout header="header3" footer="footer3">
          <Blog1 />
          <DigitalAgencyCTA />
        </RootLayout>
      </main>
    </>
  );
};

export default Blog;
