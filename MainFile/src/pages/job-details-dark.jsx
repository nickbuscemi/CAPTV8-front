import Head from "next/head";
import Career6 from "../../public/assets/imgs/career/6.jpg";
import Image from "next/image";
import RootLayout from "@/components/common/layout/RootLayout";
import JobDetails1 from "@/components/job/JobDetails1";

const JobDetailsDark = () => {
  return (
    <div>
      <Head>
        <title>Job Details Dark</title>
        <meta name="description" content="Job Details Dark Description" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        <RootLayout header="header3" footer="footer3" defaultMode="dark">
          <section className="job__detail-top">
            <Image
              priority
              style={{ width: "auto", height: "auto" }}
              src={Career6}
              alt="Image"
              data-speed="auto"
            />
          </section>
          <JobDetails1 />
        </RootLayout>
      </main>
    </div>
  );
};

export default JobDetailsDark;
