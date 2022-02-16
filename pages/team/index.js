import Container from "../../components/container/container";
import Layout from "../../components/layout/layout";
import Profile from "../../components/profile/profile";
import Accordion from "../../components/accordion/accordion";
import team from "../../public/data/team.json";
import GridItem from "../../components/grid-item/grid-item";
import Grid from "../../components/grid/grid";
import Card from "../../components/card/card";
import styles from "./team.module.css";
import classNames from "classnames";

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
              <Card>
                <Profile
                  alt={member.name}
                  bio={member.bio}
                  image={member.image}
                  link={member.link}
                  position={member.position}
                  name={member.name}
                />
              </Card>
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
              <Card>
                <Profile
                  alt={member.name}
                  bio={member.bio}
                  image={member.image}
                  link={member.link}
                  position={member.position}
                  name={member.name}
                />
              </Card>
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
              <Card>
                <Profile
                  alt={member.name}
                  bio={member.bio}
                  image={member.image}
                  link={member.link}
                  position={member.position}
                  name={member.name}
                />
              </Card>
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
              <Card>
                <Profile
                  alt={member.name}
                  bio={member.bio}
                  image={member.image}
                  link={member.link}
                  position={member.position}
                  name={member.name}
                />
              </Card>
            </GridItem>
          ))}
        </Grid>
      </Container>
      <Container>
        <Accordion title="Emeritus Professors">
          {team.emeritus.map((member, index) => (
            <Profile
              key={index}
              id={member.id}
              image={member.image}
              alt={member.alt}
              name={member.name}
            />
          ))}
        </Accordion>
      </Container>
      <Container>
        <Accordion title="External Colaborators and Advisory Board">
          {team.advisory.map((member, index) => (
            <Profile key={index} name={member.name} bio={member.bio} />
          ))}
        </Accordion>
      </Container>
    </Layout>
  );
}
