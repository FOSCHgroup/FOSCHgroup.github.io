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
    <figure className={classNames("image is-4by3", className)}>
      {video ? (
        <iframe
          src={video}
          className={classNames("has-ratio", styles.iframe)}
        />
      ) : (
        <img src={image} alt={alt} {...passedProps} />
      )}
    </figure>
  );
}
