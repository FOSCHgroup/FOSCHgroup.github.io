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
          <Profile
            id="rosario"
            image="/images/profiles/charo.jpeg"
            alt="Una foto de M. Rosario López"
            name="Dra. María Rosario López Giménez"
          />
          <Profile
            id="angel"
            image="/images/profiles/angel_luis.jpeg"
            alt="Una foto de Ángel L. López de Pablo"
            name="Dr. Ángel L. López de Pablo León"
          />
          <Profile
            id="carmen"
            image="/images/profiles/mari_carmen.jpg"
            alt="Una foto de Maria dek Carmen González"
            name="Dra. María del Carmen González"
          />
        </Accordion>
      </Container>
      <Container>
        <Accordion title="External Colaborators and Advisory Board">
          <Profile
            name="Dra. Begoña Quintana Villamandos"
            bio="Cardiac surgery unit of Anesthesiology and Resuscitation Service; Hospital General Universitario Gregorio Marañón (Madrid, Spain)"
          />
          <Profile
            name="Dra. Maria de la Calle Fernández-Miranda"
            bio="High-risk unit of OBS/GYN Service; Hospital Universitario La Paz (Madrid, Spain)"
          />
          <Profile
            name="Dr. Miguel Sáen de Pipaón Marcos"
            bio="Neonatal Intensive Care unit of Neonatology Service; Hospital Universitario La Paz (Madrid, Spain)"
          />
          <Profile
            name="Dr. Jose María González Granado"
            bio="Group Lead of LamImSys Lab; Instituto de Investigaciones Sanitarias Hospital 12 de Octubre (imas12, Madrid, Spain)"
          />
          <Profile
            name="Dra. Gloria Hernández Carrillo"
            bio="Neonatology Service; Hospital Clínico San Carlos (Madrid, Spain)"
          />
          <Profile
            name="Dra. Eva Garrosa Hernández"
            bio="Department of bio-psychology and health psychology of Faculty of Psychology; Universidad Autónoma de Madrid (Spain)"
          />
          <Profile
            name="Dra. María de la Fé Rodriguez Muñoz"
            bio="Department of Personality, Treatment and Assesment of Faculty of Psychology; Universidad Nacional de Educación a Distancia (Spain)"
          />
          <Profile
            name="Dra. Marta Gil Ortega"
            bio="Department of Pharmaceutical Sciences and Health; Universidad CEU-San Pablo (Madrid, Spain)"
          />
          <Profile
            name="Dra. Beatriz Somoza Hernandez"
            bio="Department of Pharmaceutical Sciences and Health; Universidad CEU-San Pablo (Madrid, Spain)"
          />
        </Accordion>
      </Container>
    </Layout>
  );
}
