import styles from "./profile.module.css";
import Card from "../../ui/card/card";
import CardHeader from "../../ui/card-header/card-header";
import CardMedia from "../../ui/card-media/card-media";
import CardContent from "../../ui/card-content/card-content";

export default function Profile({ user: { name, image, bio, position } }) {
  return (
    <Card className={styles.member}>
      <CardHeader
        title={name}
        subtitle={position}
        className={styles.memberHeader}
      />
      {image && (
        <CardMedia image={image} alt={name} className={styles.memberMedia} />
      )}
      {bio && <CardContent className={styles.memberContent}>{bio}</CardContent>}
    </Card>
  );
}
