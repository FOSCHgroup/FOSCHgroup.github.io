import styles from "./card.module.css";

export default function Card({
  children,
  image,
  image2,
  title,
  video,
  link,
  bio,
}) {
  return (
    <div className={styles.card}>
      {image && <img alt={title} src={image} className={styles.image} />}
      {image2 && <img alt={title} src={image2} className={styles.image} />}
      {video && <iframe src={video} className={styles.video} />}
      {link && (
        <a target="_blank" rel="noreferrer" href={link}>
          Link
        </a>
      )}
      <h3>{title}</h3>
      <div className={styles.bio}>{bio}</div>
      {children}
    </div>
  );
}
