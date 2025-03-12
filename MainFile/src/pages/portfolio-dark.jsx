import Head from "next/head";
import RootLayout from "@/components/common/layout/RootLayout";
import Portfolio1 from "@/components/portfolio/Portfolio1";
import DigitalAgencyCTA from "@/components/cta/DigitalAgencyCTA";

const PortfolioDark = () => {
  return (
    <>
      <Head>
        <title>Portfolio Dark</title>
        <meta name="description" content="Portfolio Dark Description" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        <RootLayout header="header3" footer="footer3" defaultMode="dark">
          <Portfolio1 />
          <DigitalAgencyCTA />
        </RootLayout>
      </main>
    </>
  );
};

export default PortfolioDark;
