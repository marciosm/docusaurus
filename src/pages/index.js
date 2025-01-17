import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageApis from "@site/src/components/HomepageApis";
import HomepageHeader from "@site/src/components/HomepageHeader";

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={` ${siteConfig.title}`}
      description="Developers Magalu"
    >
      <HomepageHeader />
      <main>
        <HomepageApis />
      </main>
    </Layout>
  );
}
