import styles from "./card.module.css";

export default function Card({ children, image, title, video }) {
  return (
    <div className={styles.card}>
      {image && <img alt={title} src={image} className={styles.image} />}
      {video && <iframe src={video} />}
      <h3>{title}</h3>
      {children}
    </div>
  );
}
