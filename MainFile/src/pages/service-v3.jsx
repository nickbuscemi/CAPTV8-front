import Head from "next/head";
import RootLayout from "@/components/common/layout/RootLayout";
import ServiceElementV3 from "@/components/service/ServiceElementV3";
import ServiceBrand from "@/components/brand/ServiceBrand";
import DigitalAgencyCTA from "@/components/cta/DigitalAgencyCTA";

const ServiceV3 = () => {
  return (
    <>
      <Head>
        <title>Service V3</title>
        <meta name="description" content="Service V3 Description" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        <RootLayout header="header3" footer="footer3">
          <ServiceElementV3 />
          <ServiceBrand />
          <DigitalAgencyCTA />
        </RootLayout>
      </main>
    </>
  );
};

export default ServiceV3;
