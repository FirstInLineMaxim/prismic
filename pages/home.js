import * as prismic from "@prismicio/client";
import sm from "../sm.json";
import { components } from "../slices";
import { SliceZone } from "@prismicio/react";
import { useEffect } from "react";
import Head from "next/head";

export const getStaticProps = async (context) => {
  console.log(context.params);
  const client = prismic.createClient(sm.apiEndpoint);
  const page = await client.getByUID("homepage", "startseite", {
    lang: "fr-fr",
  });
  return {
    props: { page },
  };
};
const Page = ({ page }) => {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="container mx-auto">
        <section className="h-screen py-24">
          <SliceZone slices={page.data.slices} components={components} />
        </section>
      </main>
    </>
  );
};
export default Page;
