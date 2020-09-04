import Head from "next/head";
import Link from "next/link";
import Layout from "../../components/layout";
import ContactForm from "../../components/contact";

export default function APIPost() {
  return (
    <Layout>
      <Head>
        <title>API</title>
      </Head>
      <h1>Thanks for your interest in collaborating!</h1>
      <h2>
        <Link href="/">
          <a>return home</a>
        </Link>
      </h2>
      <ContactForm></ContactForm>
    </Layout>
  );
}
