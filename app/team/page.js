import Container from "../../ui/container/container";
import Layout from "../../components/layout/layout";
import Accordion from "../../ui/accordion/accordion";
import team from "/public/data/team.json";
import Grid from "../../components/grid/grid";
import List from "../../ui/list/list";
import ListItem from "../../ui/list-item/list-item";
import ListItemText from "../../ui/list-item-text/list-item-text";
import ListItemAvatar from "../../ui/list-item-avatar/list-item-avatar";
import Avatar from "../../ui/avatar/avatar";
import Member from "../../components/member/member";
import Typography from "../../ui/typography/typography";

async function getData() {
  const res = await fetch("http://localhost:1337/api/members?populate=*", {
    headers: {
      Authorization: `Bearer ${process.env.STRAPI_API_KEY}`,
    },
  });

  if (!res.ok) {
    throw new Error(res.error);
  }

  return res.json();
}

export default async function Page() {
  const data = await getData();
  const getMembers = (type) =>
    data.data
      .filter((member) => member.attributes.type === type)
      .map((member) => member.attributes);

  const principalInvestigators = getMembers("Principal Investigator");
  const juniorInvestigators = getMembers("Junior Investigator");
  const postDoctoralResearchers = getMembers("Postdoctoral Researcher");
  const phdStudents = getMembers("PhD Student");
  const emeritusProfessors = getMembers("Emeritus Professor");
  const externalCollaborators = getMembers(
    "External Collaborator / Advisory Board"
  );

  return (
    <Layout title="Faculty and Researchers">
      <Container>
        <Typography component="h2">Principal Investigators</Typography>
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
        <Typography component="h2">Junior Investigators</Typography>
        <Grid>
          {juniorInvestigators.map((member, index) => (
            <Member key={index} member={member} typeMembers={team.junior} />
          ))}
        </Grid>
      </Container>
      <Container>
        <Typography component="h2">Postdoctoral Researchers</Typography>
        <Grid>
          {postDoctoralResearchers.map((member, index) => (
            <Member
              key={index}
              member={member}
              typeMembers={team.postdoctoral}
            />
          ))}
        </Grid>
      </Container>
      <Container>
        <Typography component="h2">PhD Students</Typography>
        <Grid>
          {phdStudents.map((member, index) => (
            <Member key={index} member={member} typeMembers={team.phd} />
          ))}
        </Grid>
      </Container>
      <Container>
        <Accordion title="Emeritus Professors">
          <List>
            {emeritusProfessors.map((member, index) => (
              <ListItem key={index}>
                <ListItemAvatar>
                  <Avatar
                    alt={member.name}
                    src={`http://localhost:1337${member.image.data.attributes.url}`}
                  />
                </ListItemAvatar>
                <ListItemText
                  primary={
                    member.title
                      ? `${member.title} ${member.name}`
                      : member.name
                  }
                />
              </ListItem>
            ))}
          </List>
        </Accordion>
      </Container>
      <Container>
        <Accordion title="External Colaborators and Advisory Board">
          <List>
            {externalCollaborators.map((member, index) => (
              <ListItem key={index}>
                <ListItemText
                  primary={
                    member.title
                      ? `${member.title} ${member.name}`
                      : member.name
                  }
                  secondary={member.position}
                />
              </ListItem>
            ))}
          </List>
        </Accordion>
      </Container>
    </Layout>
  );
}