import classNames from "classnames";
import styles from "./card.module.css";

export default function Card({
  image,
  title,
  video,
  link,
  details,
  date,
  className,
}) {
  return (
    <div className={classNames(styles.card, className)}>
      <div className={styles.cardMedia}>
        {image && <img alt={title} src={image} className={styles.image} />}
        {video && <iframe src={video} className={styles.video} />}
      </div>
      <div className={styles.cardContent}>
        {link ? (
          <a target="_blank" rel="noreferrer" href={link}>
            {title}
          </a>
        ) : (
          title
        )}
        {date && <div className={styles.date}>{date}</div>}
        {details && <div className={styles.details}>{details}</div>}
      </div>
    </div>
  );
}
