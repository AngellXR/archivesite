import Head from "next/head";
import Link from "next/link";
import Layout from "../../components/layout";
import { Button } from "../../components/Button";

export default function FirstPost() {
  return (
    <Layout>
      <Head>
        <title>First Post</title>
      </Head>
      <h1>First Post</h1>
      <h2>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h2>
      <TwitterFollowButton screenName={"angell_xr"} />
      <TwitterTimelineEmbed
        sourceType="profile"
        screenName="angell_xr"
        options={{ height: 800 }}
      />
    </Layout>
  );
}
