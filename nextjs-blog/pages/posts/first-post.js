import Head from "next/head";
import Link from "next/link";
import Layout from "../../components/layout";

export default function FirstPost() {
  return (
    <Layout>
      <Head>
        <title>First Post</title>
      </Head>
      <h1>Part I: Path to MVP</h1>
      <h2>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h2>
      <p>
        It's certainly been a long journey to get here, but I am proud to say,
        we are living in a World that is finally ready for VR.
      </p>
    </Layout>
  );
}
