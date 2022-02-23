import styles from "./profile.module.css";
import Card from "../../ui/card/card";
import CardHeader from "../../ui/card-header/card-header";
import CardMedia from "../../ui/card-media/card-media";
import CardContent from "../../ui/card-content/card-content";
import Typography from "../../ui/typography/typography";
import classNames from "classnames";

export default function Profile({
  user: { name, image, link, bio, area, position },
}) {
  return (
    <Card className={classNames(styles.member, styles[area])}>
      <CardHeader
        title={name}
        subtitle={position}
        link={link}
        className={styles.memberHeader}
      />
      {image && (
        <CardMedia image={image} alt={name} className={styles.memberMedia} />
      )}
      {bio && (
        <CardContent className={styles.memberContent}>
          <Typography>{bio}</Typography>
        </CardContent>
      )}
    </Card>
  );
}
