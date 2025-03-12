import Head from "next/head";
import RootLayout from "@/components/common/layout/RootLayout";
import Team1 from "@/components/team/Team1";
import TeamCounter from "@/components/counter/TeamCounter";
import DigitalAgencyCTA from "@/components/cta/DigitalAgencyCTA";

const TeamDark = () => {
  return (
    <div>
      <Head>
        <title>Team Dark</title>
        <meta name="description" content="Team Dark Description" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        <RootLayout header="header3" footer="footer3" defaultMode="dark">
          <Team1 />
          <TeamCounter />
          <DigitalAgencyCTA />
        </RootLayout>
      </main>
    </div>
  );
};

export default TeamDark;
