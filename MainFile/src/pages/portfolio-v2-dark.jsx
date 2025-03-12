import Head from "next/head";
import { useEffect, useRef } from "react";
import RootLayout from "@/components/common/layout/RootLayout";
import PortfolioElementV2 from "@/components/portfolio/PortfolioElementV2";
import PortfolioV2CTA from "@/components/cta/PortfolioV2CTA";
import animationCharCome from "@/lib/utils/animationCharCome";

const PortfolioV2Dark = () => {
  const charAnim = useRef();
  useEffect(() => {
    animationCharCome(charAnim.current);
  }, []);
  return (
    <>
      <Head>
        <title>Portfolio V2 Dark</title>
        <meta name="description" content="Portfolio V2 Dark Description" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        <RootLayout header="header3" footer="footer3" defaultMode="dark">
          <section className="pt-150 pb-130 portfolio-v2">
            <div className="container">
              <div className="row">
                <div className="col-xxl-8 col-xl-7 col-lg-6 col-md-6">
                  <div className="sec-title-wrapper">
                    <h2
                      className="sec-title-2 animation__char_come"
                      ref={charAnim}
                    >
                      Selected <br /> Projects
                    </h2>
                  </div>
                </div>
                <div className="col-xxl-4 col-xl-5 col-lg-6 col-md-6">
                  <div className="blog__text">
                    <p>
                      Crafting new bright brands, unique visual systems and
                      digital experience focused on a wide range of original
                      collabs.{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <PortfolioElementV2 />
          <PortfolioV2CTA />
        </RootLayout>
      </main>
    </>
  );
};

export default PortfolioV2Dark;
