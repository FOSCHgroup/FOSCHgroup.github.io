import ListItem from "@/ui/list-item/list-item";
import ListItemText from "@/ui/list-item-text/list-item-text";
import Typography from "@/ui/typography/typography";
import styles from "./project.module.css";

export default function Project({ project }) {
  return (
    <ListItem className={styles.project}>
      <ListItemText
        primary={project.name}
        secondary={project.dates}
        className={styles.header}
      ></ListItemText>
      <Typography component="div" className={styles.organization}>
        {project.organization}
      </Typography>
    </ListItem>
  );
}
