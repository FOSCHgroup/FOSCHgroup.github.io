import Member, {
  Member as IMember,
  MemberType
} from "@/components/member/member";

import Accordion from "@/ui/accordion/accordion";
import Container from "@/ui/container/container";
import Grid from "@/components/grid/grid";
import Hero from "@/components/hero/hero";
import List from "@/ui/list/list";
import { fetchData } from "@/utils/data-fetching";

async function getData() {
  return fetchData<IMember>("members", true);
}

export default async function Page() {
  const members = (await getData()) || [];
  const getMembers = (type: string) =>
    members.filter((member) => member.type === type);
  const getMemberNameWithTitle = (member: IMember) =>
    member.title ? `${member.title} ${member.name}` : member.name;

  const principalInvestigators = getMembers(MemberType.PRINCIPAL);
  const juniorInvestigators = getMembers(MemberType.JUNIOR);
  const postDoctoralResearchers = getMembers(MemberType.POSTDOC);
  const phdStudents = getMembers(MemberType.PHD);
  const emeritusProfessors = getMembers(MemberType.EMERITUS);
  const externalCollaborators = getMembers(MemberType.EXTERNAL);

  return (
    <>
      <Hero title="Faculty and Researchers" />
      <Container>
        <h2 className="title is-3">Principal Investigators</h2>
        <Grid>
          {principalInvestigators.map((member, index) => (
            <Member
              key={index}
              member={member}
              typeMembers={principalInvestigators}
            />
          ))}
        </Grid>
      </Container>
      <Container>
        <h2 className="title is-3">Junior Investigators</h2>
        <Grid>
          {juniorInvestigators.map((member, index) => (
            <Member
              key={index}
              member={member}
              typeMembers={juniorInvestigators}
            />
          ))}
        </Grid>
      </Container>
      <Container>
        <h2 className="title is-3">Postdoctoral Researchers</h2>
        <Grid>
          {postDoctoralResearchers.map((member, index) => (
            <Member
              key={index}
              member={member}
              typeMembers={postDoctoralResearchers}
            />
          ))}
        </Grid>
      </Container>
      <Container>
        <h2 className="title is-3">PhD Students</h2>
        <Grid>
          {phdStudents.map((member, index) => (
            <Member key={index} member={member} typeMembers={phdStudents} />
          ))}
        </Grid>
      </Container>
      <Container>
        <Accordion title="Emeritus Professors">
          <List>
            {emeritusProfessors.map((member, index) => (
              <li className="media" key={index}>
                <div className="media-left">
                  <figure className="image is-128x128 is-square">
                    <img
                      alt={member.name}
                      src={`/images/members/${member.image.data.attributes.name}`}
                    />
                  </figure>
                </div>
                <div className="media-content">
                  <p className="title is-6">{getMemberNameWithTitle(member)}</p>
                </div>
              </li>
            ))}
          </List>
        </Accordion>
      </Container>
      <Container>
        <Accordion title="External Collaborators and Advisory Board">
          <List>
            {externalCollaborators.map((member, index) => (
              <li className="content" key={index}>
                <p className="title is-6 mb-5">
                  {getMemberNameWithTitle(member)}
                </p>
                <p className="subtitle is-6">{member.position}</p>
              </li>
            ))}
          </List>
        </Accordion>
      </Container>
    </>
  );
}
