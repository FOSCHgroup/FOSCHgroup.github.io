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
        <footer className={styles.footer}>
          <Container>
            <h2>Contact us</h2>
            <p>
              For general inquiries, please write to:{" "}
              <a href="mailto:fosch@uam.es">fosch@uam.es</a>
            </p>
            <p>
              For research/investigation questions, please write to:{" "}
              <a href="mailto:fosch.research@uam.es">fosch.research@uam.es</a>
            </p>
            <p>
              For formation issues or MSc/PhD stay, please write to:{" "}
              <a href="mailto:fosch.educa@uam.es">fosch.educa@uam.es</a>
            </p>
            <p>
              Follow us on Twitter:{" "}
              <a
                rel="noreferrer"
                target="_blank"
                href="https://www.twitter.com/"
              >
                @FoschGroup
              </a>
            </p>
          </Container>
        </footer>
      </div>
    </div>
  );
}
