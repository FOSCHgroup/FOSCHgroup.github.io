import Container from "../components/container/container";
import Layout from "../components/layout/layout";
import Profile from "../components/profile/profile";
import Accordion from "../components/accordion/accordion";
import team from "../public/data/team.json";
import GridItem from "../components/grid-item/grid-item";
import Grid from "../components/grid/grid";

export default function NuestroEquipoPage() {
  return (
    <Layout title="Faculty and Researchers">
      <Container>
        <h2>Principal Investigators</h2>
        <Grid>
          <GridItem>
            {team.principal
              .filter(({ area }) => area === "medicina")
              .map((member, index) => (
                <Profile
                  alt={member.name}
                  bio={member.bio}
                  image={member.image}
                  key={index}
                  link={member.link}
                  position={member.position}
                  name={member.name}
                />
              ))}
          </GridItem>
          <GridItem>
            {team.principal
              .filter(({ area }) => area === "cial")
              .map((member, index) => (
                <Profile
                  alt={member.name}
                  bio={member.bio}
                  image={member.image}
                  key={index}
                  link={member.link}
                  position={member.position}
                  name={member.name}
                />
              ))}
          </GridItem>
        </Grid>
      </Container>
      <Container>
        <h2>Junior Investigators</h2>
        <Grid>
          <GridItem xs={6}>
            {team.junior
              .filter(({ area }) => area === "medicina")
              .map((member, index) => (
                <Profile
                  alt={member.name}
                  bio={member.bio}
                  image={member.image}
                  key={index}
                  link={member.link}
                  position={member.position}
                  name={member.name}
                />
              ))}
          </GridItem>
          <GridItem xs={6}>
            {team.junior
              .filter(({ area }) => area === "cial")
              .map((member, index) => (
                <Profile
                  alt={member.name}
                  bio={member.bio}
                  image={member.image}
                  key={index}
                  link={member.link}
                  position={member.position}
                  name={member.name}
                />
              ))}
          </GridItem>
        </Grid>
      </Container>
      <Container>
        <h2>Postdoctoral Researchers</h2>
        <Grid>
          <GridItem>
            {team.postdoctoral
              .filter(({ area }) => area === "medicina")
              .map((member, index) => (
                <Profile
                  alt={member.name}
                  bio={member.bio}
                  image={member.image}
                  key={index}
                  link={member.link}
                  position={member.position}
                  name={member.name}
                />
              ))}
          </GridItem>
          <GridItem>
            {team.postdoctoral
              .filter(({ area }) => area === "cial")
              .map((member, index) => (
                <Profile
                  alt={member.name}
                  bio={member.bio}
                  image={member.image}
                  key={index}
                  link={member.link}
                  position={member.position}
                  name={member.name}
                />
              ))}
          </GridItem>
        </Grid>
      </Container>
      <Container>
        <h2>PhD Students</h2>
        <Grid>
          <GridItem>
            {team.phd
              .filter(({ area }) => area === "medicina")
              .map((member, index) => (
                <Profile
                  alt={member.name}
                  bio={member.bio}
                  image={member.image}
                  key={index}
                  link={member.link}
                  position={member.position}
                  name={member.name}
                />
              ))}
          </GridItem>
          <GridItem>
            {team.phd
              .filter(({ area }) => area === "cial")
              .map((member, index) => (
                <Profile
                  alt={member.name}
                  bio={member.bio}
                  image={member.image}
                  key={index}
                  link={member.link}
                  position={member.position}
                  name={member.name}
                />
              ))}
          </GridItem>
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
