import Container from "../components/container/container";
import Layout from "../components/layout/layout";
import Profile from "../components/profile/profile";
import Accordion from "../components/accordion/accordion";
import team from "../public/data/team.json";

export default function NuestroEquipoPage() {
  return (
    <Layout title="Faculty and Researchers">
      <Container>
        <h2>Principal Investigators</h2>
        {team.principal.map((member, index) => (
          <Profile
            alt={member.title}
            bio={member.bio}
            image={member.image}
            key={index}
            link={member.link}
            position={member.position}
            title={member.title}
          />
        ))}
      </Container>
      <Container>
        <h2>Junior Investigators</h2>
        {team.junior.map((member, index) => (
          <Profile
            alt={member.title}
            bio={member.bio}
            image={member.image}
            key={index}
            link={member.link}
            position={member.position}
            title={member.title}
          />
        ))}
      </Container>
      <Container>
        <h2>Postdoctoral Researchers</h2>
        {team.postdoctoral.map((member, index) => (
          <Profile
            alt={member.title}
            bio={member.bio}
            image={member.image}
            key={index}
            link={member.link}
            position={member.position}
            title={member.title}
          />
        ))}
      </Container>
      <Container>
        <h2>PhD Students</h2>
        {team.phd.map((member, index) => (
          <Profile
            alt={member.title}
            bio={member.bio}
            image={member.image}
            key={index}
            link={member.link}
            position={member.position}
            title={member.title}
          />
        ))}
      </Container>
      <Container>
        <Accordion title="Emeritus Professors">
          <Profile
            id="rosario"
            image="/images/profiles/charo.jpeg"
            alt="Una foto de M. Rosario López"
            title="Dra. María Rosario López Giménez"
          />
          <Profile
            id="angel"
            image="/images/profiles/angel_luis.jpeg"
            alt="Una foto de Ángel L. López de Pablo"
            title="Dr. Ángel L. López de Pablo León"
          />
          <Profile
            id="carmen"
            image="/images/profiles/mari_carmen.jpg"
            alt="Una foto de Maria dek Carmen González"
            title="Dra. María del Carmen González"
          />
        </Accordion>
      </Container>
      <Container>
        <Accordion title="External Colaborators and Advisory Board">
          <Profile
            title="Dra. Begoña Quintana Villamandos"
            bio="Cardiac surgery unit of Anesthesiology and Resuscitation Service; Hospital General Universitario Gregorio Marañón (Madrid, Spain)"
          />
          <Profile
            title="Dra. Maria de la Calle Fernández-Miranda"
            bio="High-risk unit of OBS/GYN Service; Hospital Universitario La Paz (Madrid, Spain)"
          />
          <Profile
            title="Dr. Miguel Sáen de Pipaón Marcos"
            bio="Neonatal Intensive Care unit of Neonatology Service; Hospital Universitario La Paz (Madrid, Spain)"
          />
          <Profile
            title="Dr. Jose María González Granado"
            bio="Group Lead of LamImSys Lab; Instituto de Investigaciones Sanitarias Hospital 12 de Octubre (imas12, Madrid, Spain)"
          />
          <Profile
            title="Dra. Gloria Hernández Carrillo"
            bio="Neonatology Service; Hospital Clínico San Carlos (Madrid, Spain)"
          />
          <Profile
            title="Dra. Eva Garrosa Hernández"
            bio="Department of bio-psychology and health psychology of Faculty of Psychology; Universidad Autónoma de Madrid (Spain)"
          />
          <Profile
            title="Dra. María de la Fé Rodriguez Muñoz"
            bio="Department of Personality, Treatment and Assesment of Faculty of Psychology; Universidad Nacional de Educación a Distancia (Spain)"
          />
          <Profile
            title="Dra. Marta Gil Ortega"
            bio="Department of Pharmaceutical Sciences and Health; Universidad CEU-San Pablo (Madrid, Spain)"
          />
          <Profile
            title="Dra. Beatriz Somoza Hernandez"
            bio="Department of Pharmaceutical Sciences and Health; Universidad CEU-San Pablo (Madrid, Spain)"
          />
        </Accordion>
      </Container>
    </Layout>
  );
}
