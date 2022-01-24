import Head from "next/head";
import Container from "../container/container";
import Navbar from "../navbar/navbar";
import styles from "./layout.module.css";

export default function Layout({ children, title, alt, image }) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <Head>
          <title>{title}</title>
        </Head>
        <header className={styles.header}>
          <Navbar />
        </header>
        <main className={styles.main}>
          <Container>
            {image && <img alt={alt} src={image} />}
            <h1 className={styles.title}>{title}</h1>
          </Container>
          {children}
        </main>
        <footer />
      </div>
    </div>
  );
}
