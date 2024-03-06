import GridItem from "../grid-item/grid-item";
import { Image } from "@/types";
import Profile from "../profile/profile";
import classNames from "classnames";
import styles from "./member.module.css";

export enum MemberArea {
  MEDICINE = "Medicine",
  CIAL = "CIAL"
}

export enum MemberType {
  PRINCIPAL = "Principal Investigator",
  JUNIOR = "Junior Investigator",
  POSTDOC = "Postdoctoral Researcher",
  PHD = "PhD Student",
  EMERITUS = "Emeritus Professor",
  EXTERNAL = "External Collaborator / Advisory Board"
}

export interface Member {
  area: MemberArea;
  biography: string;
  image: Image;
  link: string;
  name: string;
  position: string;
  title: string;
  type: string;
}

interface Props {
  member: Member;
  typeMembers: Member[];
}

export default function Member({ member, typeMembers }: Props) {
  const getGridRowStart = (members: Member[], member: Member) =>
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
