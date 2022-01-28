import ChevronRight from "../icons/chevron-right";
import ChevronLeft from "../icons/chevron-left";
import styles from "./carousel.module.css";
import classNames from "classnames";

export default function Carousel({ children }) {
  return (
    <div className={styles.carousel}>
      <div className={classNames(styles.arrow, styles.leftArrow)}>
        <ChevronLeft />
      </div>
      <div className={styles.content}>{children}</div>
      <div className={classNames(styles.arrow, styles.rightArrow)}>
        <ChevronRight />
      </div>
    </div>
  );
}
