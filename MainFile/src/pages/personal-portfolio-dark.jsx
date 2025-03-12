import Head from "next/head";
import RootLayout from "@/components/common/layout/RootLayout";
import PortfolioPage from "@/components/portfolio/PortfolioPage";

const PersonalPortfolioDark = () => {
  return (
    <>
      <Head>
        <title>Personal Portfolio Dark</title>
        <meta
          name="description"
          content="Personal Portfolio Dark Description"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        <div className="cursor large" id="portf_cursor_6">
          View <br />
          Project
        </div>
        <RootLayout header="header5" footer="none" defaultMode="dark">
          <PortfolioPage />
        </RootLayout>
      </main>
    </>
  );
};

export default PersonalPortfolioDark;
