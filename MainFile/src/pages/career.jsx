import CareerBenefit from "@/components/benefit/CareerBenefit";
import Career1 from "@/components/career/Career1";
import RootLayout from "@/components/common/layout/RootLayout";
import CareerGallery from "@/components/gallery/CareerGallery";
import CareerHero from "@/components/hero/CareerHero";
import Head from "next/head";

const Career = () => {
  return (
    <div>
      <Head>
        <title>Career</title>
        <meta name="description" content="Career Description" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        <RootLayout header="header3" footer="footer3">
          <CareerHero />
          <CareerGallery />
          <Career1 />
          <CareerBenefit />
        </RootLayout>
      </main>
    </div>
  );
};

export default Career;
