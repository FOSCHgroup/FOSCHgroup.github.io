import styles from "./profile.module.css";
import classNames from "classnames";

export default function Profile({
  id,
  image,
  alt,
  title,
  link,
  position,
  bio,
}) {
  return (
    <div
      className={classNames(styles.profile, {
        [styles.profileWithImage]: !!image,
      })}
      id={id}
    >
      {image && (
        <div>
          <img className={styles.image} src={image} alt={alt} />
        </div>
      )}
      <div>
        <div className={styles.title}>{title}</div>
        {link && (
          <a target="_blank" rel="noreferrer" href={link}>
            Link
          </a>
        )}
        <div className={styles.position}>{position}</div>
        <div className={styles.bio}>{bio}</div>
      </div>
    </div>
  );
}
