import Container from "../ui/container/container";
import Layout from "../components/layout/layout";
import Accordion from "../ui/accordion/accordion";
import team from "../public/data/team.json";
import Grid from "../components/grid/grid";
import List from "../ui/list/list";
import ListItem from "../ui/list-item/list-item";
import ListItemText from "../ui/list-item-text/list-item-text";
import ListItemAvatar from "../ui/list-item-avatar/list-item-avatar";
import Avatar from "../ui/avatar/avatar";
import Member from "../components/member/member";
import Typography from "../ui/typography/typography";

export default function TeamPage() {
  return (
    <Layout title="Faculty and Researchers">
      <Container>
        <Typography component="h2">Principal Investigators</Typography>
        <Grid>
          {team.principal.map((member, index) => (
            <Member key={index} member={member} typeMembers={team.principal} />
          ))}
        </Grid>
      </Container>
      <Container>
        <Typography component="h2">Junior Investigators</Typography>
        <Grid>
          {team.junior.map((member, index) => (
            <Member key={index} member={member} typeMembers={team.junior} />
          ))}
        </Grid>
      </Container>
      <Container>
        <Typography component="h2">Postdoctoral Researchers</Typography>
        <Grid>
          {team.postdoctoral.map((member, index) => (
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
          {team.phd.map((member, index) => (
            <Member key={index} member={member} typeMembers={team.phd} />
          ))}
        </Grid>
      </Container>
      <Container>
        <Accordion title="Emeritus Professors">
          <List>
            {team.emeritus.map((member, index) => (
              <ListItem key={index}>
                <ListItemAvatar>
                  <Avatar alt={member.name} src={member.image} />
                </ListItemAvatar>
                <ListItemText primary={member.name} />
              </ListItem>
            ))}
          </List>
        </Accordion>
      </Container>
      <Container>
        <Accordion title="External Colaborators and Advisory Board">
          <List>
            {team.advisory.map((member, index) => (
              <ListItem key={index}>
                <ListItemText
                  primary={member.name}
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
