import styles from "./perfil.module.css";

export default function Perfil({ id, imagen, alt, titulo, link, bio }) {
  return (
    <div className={styles.perfil} id={id}>
      <div>
        <img className={styles.imagen} src={imagen} alt={alt} />
      </div>
      <div>
        <div className={styles.titulo}>{titulo}</div>
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
