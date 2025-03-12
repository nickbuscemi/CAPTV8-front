import Head from "next/head";
import RootLayout from "@/components/common/layout/RootLayout";
import Category1 from "@/components/category/Category1";
import DigitalAgencyCTA from "@/components/cta/DigitalAgencyCTA";

const Category = () => {
  return (
    <>
      <Head>
        <title>Blog Category</title>
        <meta name="description" content="Blog Category Description" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        <RootLayout header="header3" footer="footer3">
          <Category1 />
          <DigitalAgencyCTA />
        </RootLayout>
      </main>
    </>
  );
};

export default Category;
