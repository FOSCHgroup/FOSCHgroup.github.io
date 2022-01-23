import styles from "./article.module.css"

export default function Article({ title, abstract, link, image }) {
  return (
    <div className={styles.article}>
      <a target="_blank" rel="noreferrer" href={link} className={styles.title}>{title}</a>
      <div>{abstract}</div>
      <img src={image} />
    </div>
  )
}