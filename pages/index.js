import Head from "next/head";
import Header from "@/components/Head";
import Navbar from "@/components/Navbar";
import Login from "@/components/Login";
export default function Index() {
  return (
    <>
      <Head>
        <Login />
      </Head>
    </>
  );
}
