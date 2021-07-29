import { GetServerSideProps } from "next";
import Head from "next/head";
import axios from "axios";
import useSWR from "swr";
import api from "../services/api";

const fetcher = (url: any) => axios.get(url).then(res => res.data);

export default function Home(props: any) {
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
    <div>
      <Head>
        <title>Home</title>
      </Head>

      <main>
        <h1>Project</h1>
      </main>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const url = "/api/channel/UC4ncvgh5hFr5O83MH7-jRJg";
  const response = await api.get(url);
  const data: any = await response.data;
  return { props: { data } };
};
