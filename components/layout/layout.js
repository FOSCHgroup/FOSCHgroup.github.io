import Head from "next/head";
import Container from "../container/container";
import Navbar from "../navbar/navbar";
import styles from "./layout.module.css";

export default function Layout({ children, titulo }) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <Head>
          <title>{titulo}</title>
        </Head>
        <header className={styles.header}>
          <Navbar />
        </header>
        <main>
          <Container>
            <h1 className={styles.title}>{titulo}</h1>
          </Container>
          {children}
        </main>
        <footer />
      </div>
    </div>
  );
}
