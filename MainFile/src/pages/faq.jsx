import Head from "next/head";
import RootLayout from "@/components/common/layout/RootLayout";
import Faq1 from "@/components/faq/Faq1";
import FaqCTA from "@/components/cta/FaqCTA";

const Faq = () => {
  return (
    <>
      <Head>
        <title>Faq</title>
        <meta name="description" content="Faq Description" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        <RootLayout header="header3" footer="footer3">
          <Faq1 />
          <FaqCTA />
        </RootLayout>
      </main>
    </>
  );
};

export default Faq;
