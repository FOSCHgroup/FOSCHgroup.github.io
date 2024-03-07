import Container from "@/ui/container/container";
import Link from "@/ui/link/link";
import TwitterIcon from "@/components/icons/twitter";
import YouTubeIcon from "@/components/icons/youtube";
import classNames from "classnames";
import styles from "./footer.module.css";

export default function Footer() {
  return (
    <footer className="footer">
      <Container>
        <h2 className="title is-2">Contact Us</h2>
        <div className="is-flex">
          <div className={classNames("is-flex-grow-1", styles.contactInfo)}>
            <p className="mb-2">
              For general inquiries, please write:{" "}
              <Link href="mailto:fosch@uam.es">fosch@uam.es</Link>
            </p>
            <p className="mb-2">
              For research/investigation questions, please write:{" "}
              <Link href="mailto:fosch.research@uam.es">
                fosch.research@uam.es
              </Link>
            </p>
            <p>
              For formation issues or MSc/PhD stay, please write:{" "}
              <Link href="mailto:fosch.educa@uam.es">fosch.educa@uam.es</Link>
            </p>
          </div>
          <div className={classNames("is-flex", styles.socialButtons)}>
            <a
              className="button is-ghost is-large"
              rel="noreferrer"
              target="_blank"
              href="https://www.twitter.com/foschgroup"
            >
              <span className="icon has-text-grey-light is-large">
                <TwitterIcon />
              </span>
            </a>
            <a
              className="button is-ghost is-large"
              rel="noreferrer"
              target="_blank"
              href="https://www.youtube.com/channel/UCt2XE6YCt0PVfxfRA6EBoxQ"
            >
              <span className="icon has-text-grey-light is-large">
                <YouTubeIcon />
              </span>
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
