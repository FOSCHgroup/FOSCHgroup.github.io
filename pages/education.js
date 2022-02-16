import { useState } from "react";
import Container from "../components/container/container";
import Layout from "../components/layout/layout";
import Stack from "../components/stack/stack";
import Chip from "../components/chip/chip";
import Profile from "../components/profile/profile";
import theses from "../public/data/theses.json";
import researchers from "../public/data/researchers.json";
import Feed from "../components/feed/feed";
import EducationCard from "../page-components/education/education-card/education-card";

export default function AboutPage() {
  const [department, setDepartment] = useState(null);

  return (
    <Layout title="Postgraduate Educational Programming">
      <Container>
        <h2>Research Techniques</h2>
      </Container>
      <Container>
        <h2>Researchers trained in our group</h2>
        {researchers.map((researcher, index) => (
          <Profile
            key={index}
            name={researcher.name}
            position={researcher.position}
            bio={researcher.bio}
          />
        ))}
      </Container>
      <Container>
        <h2>PhD Thesis by the Group</h2>
        <Stack>
          <Chip
            area="cial"
            label="CIAL"
            onClick={() => setDepartment("cial")}
          />
          <Chip
            area="medicine"
            label="Medicine"
            onClick={() => setDepartment("medicina")}
          />
          <Chip basic label="Clear All" onClick={() => setDepartment(null)} />
        </Stack>
        <Feed>
          {theses
            .filter(
              (thesis) => !department || thesis.areas.includes(department)
            )
            .map((thesis, index) => (
              <EducationCard
                key={index}
                title={thesis.title}
                bio={thesis.name}
                link={thesis.link}
                date={thesis.date}
                areas={thesis.areas}
              />
            ))}
        </Feed>
      </Container>
    </Layout>
  );
}
