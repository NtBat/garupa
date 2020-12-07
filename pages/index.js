import Head from "next/head";
import styles from "../styles/Home.module.scss";

import Header from "../components/Header";
import Banner from "../components/Banner";

export default function Home() {
  return (
    <>
      <Header />
      <Banner />
    </>
  );
}
