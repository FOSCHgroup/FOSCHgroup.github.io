import classNames from "classnames";
import GridItem from "../grid-item/grid-item";
import Profile from "../profile/profile";
import styles from "./member.module.css";

export default function Member({ member, typeMembers }) {
  const getGridRowStart = (members, member) =>
    members
      .filter(({ area }) => area === member.area)
      .findIndex(({ name }) => name === member.name) + 1;

  return (
    <GridItem
      className={classNames(
        styles[member.area],
        styles[getGridRowStart(typeMembers, member)]
      )}
    >
      <Profile user={member} />
    </GridItem>
  );
}
