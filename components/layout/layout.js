import Head from "next/head";
import Container from "../container/container";
import Navbar from "../navbar/navbar";
import styles from "./layout.module.css";
import TwitterIcon from "../icons/twitter";
import YouTubeIcon from "../icons/youtube";

export default function Layout({ children, title }) {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <header className={styles.header}>
        <Navbar />
      </header>
      <main className={styles.main}>
        <Container>
          <h1 className={styles.title}>{title}</h1>
        </Container>
        {children}
      </main>
      <footer className={styles.footer}>
        <Container>
          <h2>Contact us</h2>
          <div style={{ display: "flex" }}>
            <div style={{ flex: "1" }} className={styles.contactInfo}>
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
            </div>
            <div className={styles.socialButtons}>
              <a
                rel="noreferrer"
                target="_blank"
                href="https://www.twitter.com/foschgroup"
              >
                <TwitterIcon />
              </a>
              <a
                rel="noreferrer"
                target="_blank"
                href="https://www.youtube.com/foschgroup"
              >
                <YouTubeIcon />
              </a>
            </div>
          </div>
        </Container>
      </footer>
    </>
  );
}
