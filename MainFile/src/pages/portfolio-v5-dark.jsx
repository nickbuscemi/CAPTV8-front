import Head from "next/head";
import RootLayout from "@/components/common/layout/RootLayout";
import PortfolioElementV5 from "@/components/portfolio/PortfolioElementV5";
import PortfolioV2CTA from "@/components/cta/PortfolioV2CTA";

const PortfolioV5Dark = () => {
  return (
    <>
      <Head>
        <title>Portfolio V5 Dark</title>
        <meta name="description" content="Portfolio V5 Dark Description" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        <RootLayout header="header3" footer="footer3" defaultMode="dark">
          <PortfolioElementV5 />
          <PortfolioV2CTA />
        </RootLayout>
      </main>
    </>
  );
};

export default PortfolioV5Dark;
