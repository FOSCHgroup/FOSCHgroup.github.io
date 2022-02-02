import classNames from "classnames";
import styles from "./card.module.css";

export default function Card({
  children,
  image,
  image2,
  title,
  video,
  link,
  bio,
  date,
  areas = [],
}) {
  return (
    <div
      className={classNames(styles.card, {
        [styles.medicine]: areas.length === 1 && areas[0] === "medicina",
        [styles.cial]: areas.length === 1 && areas[0] === "cial",
        [styles.both]: areas.length > 1,
      })}
    >
      {image && <img alt={title} src={image} className={styles.image} />}
      {image2 && <img alt={title} src={image2} className={styles.image} />}
      {video && <iframe src={video} className={styles.video} />}
      <h3>
        <a target="_blank" rel="noreferrer" href={link}>
          {title}
        </a>
      </h3>
      <span style={{ fontStyle: "italic", color: "#666" }}>{date}</span>
      <div className={styles.bio}>{bio}</div>
      {children}
    </div>
  );
}
