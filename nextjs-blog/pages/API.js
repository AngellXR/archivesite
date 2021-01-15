import Head from "next/head";
import Link from "next/link";
import Layout from "../components/layout";
import ContactForm from "../components/contact";

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
      {/* add google form test */}
      <div>
      <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSe0aV18zeV-0Id2kC5gpgR5-tQnYge72fgdM9k_6o69j3Eeqg/viewform?embedded=true" width="640" height="911" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
      </div>
      {/* <ContactForm></ContactForm> REMOVED FOR NOW */}
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
