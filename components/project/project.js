import ListItem from "../../ui/list-item/list-item";
import styles from "./project.module.css";
import ListItemText from "../../ui/list-item-text/list-item-text";

export default function Project({ project }) {
  return (
    <ListItem className={styles.project}>
      <ListItemText
        primary={project.name}
        secondary={project.dates}
        className={styles.header}
      ></ListItemText>
      <div className={styles.organization}>{project.organization}</div>
    </ListItem>
  );
}
