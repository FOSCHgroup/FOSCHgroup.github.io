import classNames from "classnames";
import styles from "./card.module.css";

export default function Card({
  image,
  image2,
  title,
  video,
  link,
  details,
  date,
  className,
}) {
  return (
    <div className={classNames(styles.card, className)}>
      {image && <img alt={title} src={image} className={styles.image} />}
      {image2 && <img alt={title} src={image2} className={styles.image} />}
      {video && <iframe src={video} className={styles.video} />}
      <div>
        {link ? (
          <a target="_blank" rel="noreferrer" href={link}>
            {title}
          </a>
        ) : (
          title
        )}
      </div>
      {date && <div className={styles.date}>{date}</div>}
      {details && <div className={styles.details}>{details}</div>}
    </div>
  );
}
