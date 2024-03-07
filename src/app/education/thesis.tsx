import Link from "@/ui/link/link";
import classNames from "classnames";
import styles from "./thesis.module.css";

export interface IThesis {
  areas: string[];
  title: string;
  link: string;
  name: string;
  date: string;
}

interface Props {
  thesis: IThesis;
}

export default function Thesis({ thesis }: Props) {
  return (
    <div className={classNames("card", styles.thesis)}>
      <div className="card-content">
        <div className="content">
          <h4 className="title is-6 mb-2">
            {thesis.link ? (
              <Link href={thesis.link}>{thesis.title}</Link>
            ) : (
              thesis.title
            )}
          </h4>
          <p className="mb-2">{thesis.name}</p>
          <p className="has-text-weight-light is-size-7">{thesis.date}</p>
          {thesis.areas &&
            thesis.areas.map((area, index) => (
              <span
                key={index}
                className="tag has-text-white"
                style={{ backgroundColor: `var(--${area.toLowerCase()})` }}
              >
                {area}
              </span>
            ))}
        </div>
      </div>
    </div>
  );
}
