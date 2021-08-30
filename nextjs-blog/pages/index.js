import Head from "next/head";
import Link from "next/link";


export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>AngellXR</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="google-site-verification" content="gnMRBGAGdDNogNyFJJ5QVy3R1FvkBX8uxxv70ZJLG2E" />
        <meta name="description" content="We're XR (VR/AR) enthusiasts dedicated to co-creating an open Metaverse." />
        <meta name="keywords" content="Metaverse, WebXR, XR, VR, AR, Startup, Maryland, collaboration, Maryland VR, Annapolis, invest" />
      </Head>
      <main>
      <img src="/Angell-Logo-black.svg" alt="AngellXR Logo is a product of AltonTech, Inc" className="img" />
        <h1 className="title">
          {"{{"} <a href="https://discord.gg/mJyq5NK4kT">AngellXR</a>
          {"  "}
          {"}}"}
        </h1>


        <p className="description">
          &#128126; Let's build the <code>#metaverse</code> together
        </p>

        <div className="grid">
          <a href="https://angellxr.github.io/showcasexr" className="card">
            <h3>ShowcaseXR &rarr;</h3>
            <p>A compilation of work curated by the AngellXR community.</p>
          </a>

          <a href="https://github.com/AngellXR" className="card">
            <h3>Github &rarr;</h3>
            <p>Go back. Go Together. Connect Worlds. Live Forever.</p>
          </a>

          <a href="/API" className="card">
            <h3>Collaborate &rarr;</h3>
            <p>Angell is a growing community dedicated to collaboration.</p>
          </a>

          <a
            href="https://omigroup.org/home"
            className="card"
          >
            <h3>Open Metaverse &rarr;</h3>
            <p>Co-founded the Open Metaverse Interoperability group.</p>
          </a>
        </div>
      </main>

      <footer>
        <a href="https://alton.tech/" target="_blank" rel="noopener noreferrer">
          <img src="/atlogo2.png" alt="AngellXR Logo is a product of AltonTech, Inc" className="logo" />
          &nbsp; by AltonTech, Inc.
        </a>
        &nbsp; &nbsp;{" "}
        <a
          href="https://twitter.com/angell_xr?ref_src=twsrc%5Etfw"
          class="twitter-follow-button"
          data-show-count="false"
        >
          Follow @angell_xr
        </a>
        <script
          async
          src="https://platform.twitter.com/widgets.js"
          charset="utf-8"
        ></script>
      </footer>

      <style jsx>{`
      
          .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        footer img {
          margin-left: 0.5rem;
        }

        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        .title a {
          color: #623cea;
          text-decoration: none;
        }

        .title a:hover,
        .title a:focus,
        .title a:active {
          text-decoration: underline;
        }

        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 3.5rem;
        }

    

        .title,
        .description {
          text-align: center;
        }

        .description {
          line-height: 1.5;
          font-size: 1.5rem;
        }

        code {
          background: #f3f3f3;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }

        .grid {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;

          max-width: 800px;
          margin-top: 3rem;
        }

        .card {
          margin: 1rem;
          flex-basis: 45%;
          padding: 1.5rem;
          text-align: left;
          color: inherit;
          text-decoration: none;
          border: 10px solid #29292b;
          border-radius: 10px;
          background: #DCDCDC;
          box-sizing: border-box;
          box-shadow: 1rem 1rem 2.3px #623CEA;
          transition: color 0.15s ease, border-color 0.15s ease;
        }

        .card:hover,
        .card:focus,
        .card:active {
          color: #333333;
          border-color: #623cea;
          background: #DCDCDC;
          border: 10px solid #29292B;
          box-sizing: border-box;
          box-shadow: 1.6rem 1.6rem 2.3px #623CEA;
        }

        .card h3 {
          margin: 0 0 1rem 0;
          font-size: 1.5rem;
        }

        .card p {
          margin: 0;
          font-size: 1.25rem;
          line-height: 1.5;
        }

        .logo {
          height: 1em;
        }

        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }

        @media screen and (max-device-width: 420px)
         .title{
          font-size: 1 rem;
        }
      `}</style>
    </div>
  );
}
