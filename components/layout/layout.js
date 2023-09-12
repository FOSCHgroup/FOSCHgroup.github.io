import Container from "../../ui/container/container";
import Navbar from "../navbar/navbar";
import styles from "./layout.module.css";
import TwitterIcon from "../icons/twitter";
import YouTubeIcon from "../icons/youtube";
import classNames from "classnames";
import Typography from "../../ui/typography/typography";
import Link from "../../ui/link/link";

export default function Layout({ children, title, banner }) {
  return (
    <>
      <header className={styles.header}>
        <Navbar />
      </header>
      <main className={styles.main}>
        <Container
          className={classNames(styles.headingContainer, {
            [styles.withBanner]: !!banner,
          })}
        >
          {banner && <img src={banner} className={styles.banner} />}
          <Typography component="h1" className={styles.title}>
            {title}
          </Typography>
        </Container>
        {children}
      </main>
      <footer className={styles.footer}>
        <Container>
          <Typography component="h2">Contact us</Typography>
          <div style={{ display: "flex" }}>
            <div style={{ flex: "1" }} className={styles.contactInfo}>
              <Typography>
                For general inquiries, please write:{" "}
                <Link href="mailto:fosch@uam.es">fosch@uam.es</Link>
              </Typography>
              <Typography>
                For research/investigation questions, please write:{" "}
                <Link href="mailto:fosch.research@uam.es">
                  fosch.research@uam.es
                </Link>
              </Typography>
              <Typography>
                For formation issues or MSc/PhD stay, please write:{" "}
                <Link href="mailto:fosch.educa@uam.es">fosch.educa@uam.es</Link>
              </Typography>
            </div>
            <div className={styles.socialButtons}>
              <Link
                rel="noreferrer"
                target="_blank"
                href="https://www.twitter.com/foschgroup"
              >
                <TwitterIcon />
              </Link>
              <Link
                rel="noreferrer"
                target="_blank"
                href="https://www.youtube.com/channel/UCt2XE6YCt0PVfxfRA6EBoxQ"
              >
                <YouTubeIcon />
              </Link>
            </div>
          </div>
        </Container>
      </footer>
    </>
  );
}
