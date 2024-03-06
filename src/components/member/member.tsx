import GridItem from "../grid-item/grid-item";
import Profile from "../profile/profile";
import classNames from "classnames";
import styles from "./member.module.css";

export default function Member({ member, typeMembers }) {
  const getGridRowStart = (members, member) =>
    members
      .filter(({ area }) => area === member.area)
      .findIndex(({ name }) => name.includes(member.name)) + 1;

  return (
    <GridItem
      className={classNames(
        styles[member.area.toLowerCase()],
        styles[getGridRowStart(typeMembers, member)]
      )}
    >
      <Profile user={member} />
    </GridItem>
  );
}
