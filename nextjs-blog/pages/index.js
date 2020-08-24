import React from "react";
import Head from "next/head";
import Link from "next/link";
import App from "../components/App";
import * as serviceWorker from "../helpers/serviceWorker";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>AngellXR</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="title">
          {"{{"} <a href="https://Instagram.com/projectangell">AngellXR</a>
          {"  "}
          {"}}"}
        </h1>

        <p className="description">
          &#128126; To join in use <code>#angellxr</code>
        </p>

        <div className="grid">
          <a href="http://blog.angellxr.com/" className="card">
            <h3>Blog &rarr;</h3>
            <p>Learn about our quest to build the Metaverse.</p>
          </a>

          <a
            href="https://www.figma.com/file/NdpmMsUPf2jWXxc4gVfry4/Daily-UI-and-Random"
            className="card"
          >
            <h3>Prototypes &rarr;</h3>
            <p>Go back. Go together. Build Worlds. Live Forever.</p>
          </a>

          <a href="/posts/second-post" className="card">
            <h3>API &rarr;</h3>
            <p>Discover and deploy boilerplate example angell projects.</p>
          </a>

          <a
            href="https://www.notion.so/4fda7aebdb5042bd95f1190d85f3b413?v=ee7bca7e415f45189dbeaacf3b966736"
            className="card"
          >
            <h3>Roadmap &rarr;</h3>
            <p>
              Find in-depth information about AngellXR features and progress.
            </p>
          </a>
        </div>
      </main>

      <footer>
        <a href="https://alton.tech/" target="_blank" rel="noopener noreferrer">
          <img src="/atlogo2.png" alt="AltonTech Logo" className="logo" />
          &nbsp; by AltonTech, Inc.
        </a>
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
          border: 1px solid #eaeaea;
          border-radius: 10px;
          transition: color 0.15s ease, border-color 0.15s ease;
        }

        .card:hover,
        .card:focus,
        .card:active {
          color: #623cea;
          // border-color: #623cea;
          box-shadow: -1px -1px 3px rgba(161, 140, 238, 0.5),
            1px 1px 3px 2px rgba(77, 45, 194, 0.5);
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
