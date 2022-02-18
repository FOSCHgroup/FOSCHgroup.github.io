import classNames from "classnames";
import styles from "./card-media.module.css";

export default function CardMedia({
  className,
  image,
  alt,
  video,
  ...passedProps
}) {
  return (
    <div className={classNames(styles.cardMedia, className)}>
      {video ? (
        <iframe src={video} />
      ) : (
        <img src={image} alt={alt} {...passedProps} />
      )}
    </div>
  );
}
