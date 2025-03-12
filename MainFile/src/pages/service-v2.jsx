import Head from "next/head";
import RootLayout from "@/components/common/layout/RootLayout";
import ServiceElementV2 from "@/components/service/ServiceElementV2";
import ServiceBrand from "@/components/brand/ServiceBrand";
import DigitalAgencyCTA from "@/components/cta/DigitalAgencyCTA";

const ServiceV2 = () => {
  return (
    <>
      <Head>
        <title>Service V2</title>
        <meta name="description" content="Service V2 Description" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        <RootLayout header="header3" footer="footer3">
          <ServiceElementV2 />
          <ServiceBrand />
          <DigitalAgencyCTA />
        </RootLayout>
      </main>
    </>
  );
};

export default ServiceV2;
