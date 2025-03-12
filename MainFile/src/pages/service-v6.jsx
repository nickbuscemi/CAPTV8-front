import Head from "next/head";
import RootLayout from "@/components/common/layout/RootLayout";
import ServiceV6Hero from "@/components/hero/ServiceV6Hero";
import CreativeAgencyService from "@/components/service/CreativeAgencyService";
import CreativeAgencyCTA from "@/components/cta/CreativeAgencyCTA";

const ServiceV6 = () => {
  return (
    <div>
      <Head>
        <title>Service V6</title>
        <meta name="description" content="Service V6 Description" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        <RootLayout header="header4" footer="footer2">
          <ServiceV6Hero />
          <CreativeAgencyService />
          <CreativeAgencyCTA />
        </RootLayout>
      </main>
    </div>
  );
};

export default ServiceV6;
