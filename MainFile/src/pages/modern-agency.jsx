import Head from "next/head";
import RootLayout from "@/components/common/layout/RootLayout";
import ModernAgencyHero from "@/components/hero/ModernAgencyHero";
import ModernAgencyPortfolio from "@/components/portfolio/ModernAgencyPortfolio";
import ModernAgencyWork from "@/components/work/ModernAgencyWork";
import ModernAgencyAbout from "@/components/about/ModernAgencyAbout";
import ModernAgencySingleImage from "@/components/singleImage/ModernAgencySingleImage";
import ModernAgencyWork2 from "@/components/work/ModernAgencyWork2";
import ModernAgencyBrand from "@/components/brand/ModernAgencyBrand";

const ModernAgency = () => {
  return (
    <div>
      <Head>
        <title>Modern Agency</title>
        <meta name="description" content="Modern Agency Description" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        <RootLayout header="header1" footer="footer5">
          <ModernAgencyHero />
          <ModernAgencyPortfolio />
          <ModernAgencyWork />
          <ModernAgencyAbout />
          <ModernAgencySingleImage />
          <ModernAgencyWork2 />
          <ModernAgencyBrand />
        </RootLayout>
      </main>
    </div>
  );
};

export default ModernAgency;
