import Head from "next/head";
import RootLayout from "@/components/common/layout/RootLayout";
import Portfolio1 from "@/components/portfolio/Portfolio1";
import DigitalAgencyCTA from "@/components/cta/DigitalAgencyCTA";

const Portfolio = () => {
  return (
    <>
      <Head>
        <title>Portfolio</title>
        <meta name="description" content="Portfolio Description" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        <RootLayout header="header3" footer="footer3">
          <Portfolio1 />
          <DigitalAgencyCTA />
        </RootLayout>
      </main>
    </>
  );
};

export default Portfolio;
