import Head from "next/head";
import RootLayout from "@/components/common/layout/RootLayout";
import PortfolioDetails1 from "@/components/portfolio/PortfolioDetails1";

const PortfolioDetailsDark = () => {
  return (
    <>
      <Head>
        <title>Portfolio Details Dark</title>
        <meta name="description" content="Portfolio Details Dark Description" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        <RootLayout header="header3" footer="footer3" defaultMode="dark">
          <PortfolioDetails1 />
        </RootLayout>
      </main>
    </>
  );
};

export default PortfolioDetailsDark;
