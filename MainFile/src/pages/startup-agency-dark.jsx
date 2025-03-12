import Head from "next/head";
import RootLayout from "@/components/common/layout/RootLayout";
import StartupAgencyHero from "@/components/hero/StartupAgencyHero";
import StartupAgencyWorkflow from "@/components/workflow/StartupAgencyWorkflow";
import StartupAgencyFeature from "@/components/feature/StartupAgencyFeature";
import StartupAgencyService from "@/components/service/StartupAgencyService";
import StartupAgencyFaq from "@/components/faq/StartupAgencyFaq";
import StartupAgencyPortfolio from "@/components/portfolio/StartupAgencyPortfolio";
import StartupAgencyBrand from "@/components/brand/StartupAgencyBrand";
import StartupAgencyTestimonial from "@/components/testimonial/StartupAgencyTestimonial";
import StartupAgencySolution from "@/components/solution/StartupAgencySolution";
import StartupAgencyBlog from "@/components/blog/StartupAgencyBlog";
import StartupAgencyCTA from "@/components/cta/StartupAgencyCTA";

const StartupAgencyDark = () => {
  return (
    <div>
      <Head>
        <title>Startup Agency Dark</title>
        <meta name="description" content="Startup Agency Dark Description" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        <RootLayout header="header1" footer="footer1" defaultMode="dark">
          <StartupAgencyHero />
          <StartupAgencyWorkflow />
          <StartupAgencyFeature />
          <StartupAgencyService />
          <StartupAgencyFaq />
          <StartupAgencyPortfolio />
          <StartupAgencyBrand />
          <StartupAgencyTestimonial />
          <StartupAgencySolution />
          <StartupAgencyBlog />
          <StartupAgencyCTA />
        </RootLayout>
      </main>
    </div>
  );
};

export default StartupAgencyDark;
