import Head from "next/head";
import Link from "next/link";


export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>AngellXR</title>
        <link rel="icon" href="/favicon.ico" />
        {/* below you'll find code to add an aframe cube to the scene  */}
        {/* <script src="https://aframe.io/releases/1.0.4/aframe.min.js"> */}
        {/* </script> */}
          {/* <div> */}
          {/* <a-scene> <a-box position="0 2 -4" color="#623cea"> </a-box></a-scene> */}
          {/* </div> */}
      </Head>

      <main>
        <h1 className="title">
          {"{{"} <a href="https://Instagram.com/projectangell">AngellXR</a>
          {"  "}
          {"}}"}
        </h1>

        <p className="description">
          &#128126; Join in with <code>#angellxr</code>
        </p>

        <div className="grid">
          <a href="https://angellxr.github.io/sandboXR" className="card">
            <h3>Sandbox &rarr;</h3>
            <p>For development purposes, just a quick and dirty test page.</p>
          </a>

          <a href="https://github.com/AngellXR" className="card">
            <h3>Github &rarr;</h3>
            <p>Go back. Go Together. Build Worlds. Live Forever.</p>
          </a>

          <a href="/posts/API" className="card">
            <h3>API &rarr;</h3>
            <p>Discover and deploy boilerplate example angell projects.</p>
          </a>

          <a
            href="https://www.notion.so/4fda7aebdb5042bd95f1190d85f3b413?v=ee7bca7e415f45189dbeaacf3b966736"
            className="card"
          >
            <h3>Roadmap &rarr;</h3>
            <p>Track up to date progress on AngellXR features.</p>
          </a>
        </div>
      </main>

      <footer>
        <a href="https://alton.tech/" target="_blank" rel="noopener noreferrer">
          <img src="/atlogo2.png" alt="AltonTech Logo" className="logo" />
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
          font-size: 4rem;
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
      `}</style>
    </div>
  );
}
