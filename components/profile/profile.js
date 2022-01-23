import styles from "./profile.module.css";

export default function Profile({ id, image, alt, title, link, bio }) {
  return (
    <div className={styles.profile} id={id}>
      <div>
        <img className={styles.image} src={image} alt={alt} />
      </div>
      <div>
        <div className={styles.title}>{title}</div>
        {link && (
          <a target="_blank" rel="noreferrer" href={link}>
            Link
          </a>
        )}
        <div className="bio">{bio}</div>
      </div>
    </div>
  );
}
