import CardContent from "../../ui/card-content/card-content";
import CardHeader from "../../ui/card-header/card-header";
import Card from "../../ui/card/card";
import Typography from "../../ui/typography/typography";
import styles from "./thesis.module.css";

export default function Thesis({ thesis }) {
  return (
    <Card
      className={styles.thesis}
      variant={thesis.areas.length === 1 ? thesis.areas[0] : "both"}
    >
      <CardHeader title={thesis.title} link={thesis.link} />
      <CardContent className={styles.content}>
        <Typography>{thesis.name}</Typography>
        <Typography color="secondary">{thesis.date}</Typography>
      </CardContent>
    </Card>
  );
}
