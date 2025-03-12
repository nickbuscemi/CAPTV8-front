import Head from "next/head";
import RootLayout from "@/components/common/layout/RootLayout";
import TeamDetails1 from "@/components/team/TeamDetails1";
import DigitalAgencyCTA from "@/components/cta/DigitalAgencyCTA";

const TeamDetailsDark = () => {
  return (
    <div>
      <Head>
        <title>Team Details Dark</title>
        <meta name="description" content="Team Details Dark Description" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        <RootLayout header="header3" footer="footer3" defaultMode="dark">
          <TeamDetails1 />
          <DigitalAgencyCTA />
        </RootLayout>
      </main>
    </div>
  );
};

export default TeamDetailsDark;
