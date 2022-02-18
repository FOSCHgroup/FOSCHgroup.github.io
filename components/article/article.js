import CardContent from "../../ui/card-content/card-content";
import CardHeader from "../../ui/card-header/card-header";
import Card from "../../ui/card/card";
import Typography from "../../ui/typography/typography";
import styles from "./article.module.css";

export default function Article({ article }) {
  return (
    <Card
      className={styles.article}
      areas={article.areas}
      variant={article.areas.length === 1 ? article.areas[0] : "both"}
    >
      <CardHeader title={article.title} link={article.link} />
      <CardContent>
        <Typography>{article.name}</Typography>
        <Typography color="secondary">{article.date}</Typography>
      </CardContent>
    </Card>
  );
}
