import { HTMLAttributes } from "react";
import classNames from "classnames";
import styles from "./card-media.module.css";

interface Props extends HTMLAttributes<HTMLElement> {
  image?: string;
  alt?: string;
  video?: string;
}

export default function CardMedia({
  className,
  image,
  alt,
  video,
  ...passedProps
}: Props) {
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
