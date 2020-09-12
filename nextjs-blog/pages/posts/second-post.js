import Head from "next/head";
import Link from "next/link";
import Layout from "../../components/layout";

export default function APIPost() {
  return (
    <Layout>
      <Head>
        <title>Open by design.</title>
      </Head>
      <h1>Thanks for your interest in collaborating!</h1>
      <h2>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h2>
    </Layout>
  );
}
