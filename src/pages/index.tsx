import { GetServerSideProps } from "next";
import Head from "next/head";
import axios from "axios";
import useSWR from "swr";
import api from "../services/api";

// import { Switch, Route, useLocation } from "react-router-dom";
import Link from "next/link";

import { AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Wrapper } from "../components/Wrapper/Wrapper";

const fetcher = (url: any) => axios.get(url).then(res => res.data);

export default function Home(props: any) {
  // const location = useLocation();
  const [activePlanet, setActivePlanet] = useState("/");

  const { data, error } = useSWR(
    "/api/channel/UC4ncvgh5hFr5O83MH7-jRJg",
    fetcher,
    {
      initialData: props.data
    }
  );

  if (error) return <div>Failed to load channels</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <Wrapper>
      <Head>
        <title>Home</title>
      </Head>

      <main></main>
    </Wrapper>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const url = "/api/channel/UC4ncvgh5hFr5O83MH7-jRJg";
  const response = await api.get(url);
  const data: any = await response.data;
  return { props: { data } };
};
