import Head from "next/head";
import RootLayout from "@/components/common/layout/RootLayout";
import ServiceElementV5 from "@/components/service/ServiceElementV5";
import ServiceBrand from "@/components/brand/ServiceBrand";
import DigitalAgencyCTA from "@/components/cta/DigitalAgencyCTA";

const ServiceV5Dark = () => {
  return (
    <>
      <Head>
        <title>Service V5 Dark</title>
        <meta name="description" content="Service V5 Dark Description" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        <RootLayout header="header3" footer="footer3" defaultMode="dark">
          <ServiceElementV5 />
          <ServiceBrand />
          <DigitalAgencyCTA />
        </RootLayout>
      </main>
    </>
  );
};

export default ServiceV5Dark;
