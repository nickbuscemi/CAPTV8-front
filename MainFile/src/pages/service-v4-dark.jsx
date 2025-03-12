import Head from "next/head";
import RootLayout from "@/components/common/layout/RootLayout";
import DigitalMarketingService from "@/components/service/DigitalMarketingService";
import ServiceBrand from "@/components/brand/ServiceBrand";
import DigitalAgencyCTA from "@/components/cta/DigitalAgencyCTA";

const ServiceV4Dark = () => {
  return (
    <>
      <Head>
        <title>Service V4 Dark</title>
        <meta name="description" content="Service V4 Dark Description" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        <RootLayout header="header3" footer="footer3" defaultMode="dark">
          <DigitalMarketingService />
          <ServiceBrand />
          <DigitalAgencyCTA />
        </RootLayout>
      </main>
    </>
  );
};

export default ServiceV4Dark;
