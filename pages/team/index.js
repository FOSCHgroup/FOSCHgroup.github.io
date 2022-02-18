import Container from "../../components/container/container";
import Layout from "../../components/layout/layout";
import Profile from "../../components/profile/profile";
import Accordion from "../../ui/accordion/accordion";
import team from "../../public/data/team.json";
import GridItem from "../../components/grid-item/grid-item";
import Grid from "../../components/grid/grid";
import styles from "./team.module.css";
import classNames from "classnames";
import List from "../../ui/list/list";
import ListItem from "../../ui/list-item/list-item";
import ListItemText from "../../ui/list-item-text/list-item-text";
import ListItemAvatar from "../../ui/list-item-avatar/list-item-avatar";
import Avatar from "../../ui/avatar/avatar";

export default function NuestroEquipoPage() {
  const getGridRowStart = (members, member) =>
    members
      .filter(({ area }) => area === member.area)
      .findIndex(({ name }) => name === member.name) + 1;

  return (
    <Layout title="Faculty and Researchers">
      <Container>
        <h2>Principal Investigators</h2>
        <Grid>
          {team.principal.map((member, index) => (
            <GridItem
              key={index}
              className={classNames(
                styles[member.area],
                styles[getGridRowStart(team.principal, member)]
              )}
            >
              <Profile user={member} />
            </GridItem>
          ))}
        </Grid>
      </Container>
      <Container>
        <h2>Junior Investigators</h2>
        <Grid>
          {team.junior.map((member, index) => (
            <GridItem
              key={index}
              className={classNames(
                styles[member.area],
                styles[getGridRowStart(team.junior, member)]
              )}
            >
              <Profile user={member} />
            </GridItem>
          ))}
        </Grid>
      </Container>
      <Container>
        <h2>Postdoctoral Researchers</h2>
        <Grid>
          {team.postdoctoral.map((member, index) => (
            <GridItem
              key={index}
              className={classNames(
                styles[member.area],
                styles[getGridRowStart(team.postdoctoral, member)]
              )}
            >
              <Profile user={member} />
            </GridItem>
          ))}
        </Grid>
      </Container>
      <Container>
        <h2>PhD Students</h2>
        <Grid>
          {team.phd.map((member, index) => (
            <GridItem
              key={index}
              className={classNames(
                styles[member.area],
                styles[getGridRowStart(team.phd, member)]
              )}
            >
              <Profile user={member} />
            </GridItem>
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
