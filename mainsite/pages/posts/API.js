import Head from "next/head";
import Link from "next/link";
import Layout from "../../components/layout";
import ContactForm from "../../components/contact";

export default function APIPost() {
  return (
    <Layout>
      <Head>
        <title>Open API - AngellXR</title>
        <link rel="icon" href="/favicon.ico" />
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


// import Head from "next/head";
// import Link from "next/link";
// import Layout from "../../components/layout";

// export default function APIPost() {
//   return (
//     <Layout>
//       <Head>
//         <title>001: Welcome to Angell</title>
//         <link rel="icon" href="/favicon.ico" />
//       </Head>
//       <h1>An Open Metaverse</h1>
//       <p>
//         It's certainly been a long journey to get here, but I am proud to say,
//         we are living in a World that is finally ready for XR.
//       </p>
//       <h2>
//         <Link href="/">
//           <a>return home</a>
//         </Link>
//       </h2>
//     </Layout>
//   );
// }
