import ChevronRightIcon from "../icons/chevron-right";
import ChevronLeftIcon from "../icons/chevron-left";
import styles from "./carousel.module.css";
import classNames from "classnames";
import { useState } from "react";
import Card from "../card/card";

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
        style={{ marginLeft: `${marginLeft * -298}px` }}
      >
        {data.map((talk, index) => (
          <Card
            key={index}
            title={talk.title}
            image={talk.image}
            video={talk.video}
          />
        ))}
      </div>
      <div
        className={classNames(styles.arrow, styles.rightArrow)}
        onClick={handleClickRight}
        style={{ display: marginLeft === data.length - 3 ? "none" : "flex" }}
      >
        <ChevronRightIcon />
      </div>
    </div>
  );
}
