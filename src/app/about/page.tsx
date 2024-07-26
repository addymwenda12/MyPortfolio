import Curve from "@/components/curve";
import Head from "next/head";

export default function About() {
  return (
    <>
    <Head>
      <title>About</title>
      <meta name="description" content="About page" />
      <meta name="keywords" content="about, page" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Curve backgroundColor={"#BCF366"}>
      <h1>About</h1>
      <div className="body">
        <p>Hi I'm Addy</p>
        <p>I'm a software engineer</p>
      </div>
    </Curve>
    </>
  );
}