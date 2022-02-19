import ChevronRightIcon from "../icons/chevron-right";
import ChevronLeftIcon from "../icons/chevron-left";
import styles from "./carousel.module.css";
import classNames from "classnames";
import { useState } from "react";
import Card from "../../ui/card/card";
import CardMedia from "../../ui/card-media/card-media";
import CardContent from "../../ui/card-content/card-content";
import Link from "../../ui/link/link";
import Typography from "../../ui/typography/typography";

export default function Carousel({ data }) {
  const [marginLeft, setMarginLeft] = useState(0);

  const handleClickRight = () => {
    setMarginLeft((marginLeft) => marginLeft + 1);
  };

  const handleClickLeft = () => {
    setMarginLeft((marginLeft) => marginLeft - 1);
  };

  return (
    <div className={styles.carousel}>
      <div
        className={classNames(styles.arrow, styles.leftArrow)}
        style={{ display: marginLeft ? "flex" : "none" }}
        onClick={handleClickLeft}
      >
        <ChevronLeftIcon />
      </div>
      <div
        className={styles.content}
        style={{
          marginLeft: `${marginLeft * -298}px`,
          transition: "0.2s margin-left ease-in",
        }}
      >
        {data.map((talk, index) => (
          <Card key={index}>
            <CardMedia image={talk.image} video={talk.video} />
            <CardContent>
              <Typography>
                <Link href={talk.link}>{talk.title}</Link>
              </Typography>
              <Typography color="secondary">{talk.date}</Typography>
            </CardContent>
          </Card>
        ))}
      </div>
      <div
        className={classNames(styles.arrow, styles.rightArrow)}
        onClick={handleClickRight}
        style={{ display: marginLeft === data.length - 5 ? "none" : "flex" }}
      >
        <ChevronRightIcon />
      </div>
    </div>
  );
}
