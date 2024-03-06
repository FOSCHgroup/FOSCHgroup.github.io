import Card from "@/ui/card/card";
import CardContent from "@/ui/card-content/card-content";
import CardHeader from "@/ui/card-header/card-header";
import CardMedia from "@/ui/card-media/card-media";
import Typography from "@/ui/typography/typography";
import classNames from "classnames";
import styles from "./profile.module.css";

export default function Profile({ user }) {
  const { name, image, link, bio, area, position, biography, title } = user;

  return (
    <Card className={classNames(styles.member, styles[area.toLowerCase()])}>
      <CardHeader
        title={title ? `${title} ${name}` : name}
        subtitle={position}
        link={link}
        className={styles.memberHeader}
      />
      {image && (
        <CardMedia
          image={
            image.data
              ? `http://localhost:1337${image.data.attributes.url}`
              : image
          }
          alt={name}
          className={styles.memberMedia}
        />
      )}
      {(bio || biography) && (
        <CardContent className={styles.memberContent}>
          <Typography>{bio || biography}</Typography>
        </CardContent>
      )}
    </Card>
  );
}
