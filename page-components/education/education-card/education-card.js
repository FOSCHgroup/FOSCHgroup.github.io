import Card from "../../../components/card/card";
import styles from "./education-card.module.css";

export default function EducationCard({ areas = [], ...passedProps }) {
  return (
    <Card
      className={{
        [styles.medicine]: areas.length === 1 && areas[0] === "medicina",
        [styles.cial]: areas.length === 1 && areas[0] === "cial",
        [styles.both]: areas.length > 1,
      }}
      {...passedProps}
    />
  );
}
