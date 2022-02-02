import Card from "../components/card/card";
import Container from "../components/container/container";
import Layout from "../components/layout/layout";
import Profile from "../components/profile/profile";
import education from "../public/data/education.json";
import Feed from "../components/feed/feed";

export default function AboutPage() {
  return (
    <Layout title="Postgraduate Educational Programming">
      <Container>
        <h2>Research Techniques</h2>
      </Container>
      <Container>
        <h2>Students enrolled in our group</h2>
        <Profile
          title="Dra. Perla Y. Gutierrez Arzapalo"
          position="4 years in PhD program"
          bio="Currently: Assosiate Professor in the Research Center in Health Sciences, Universidad Autónoma de Sinaloa (Sinaloa, Mexico)"
        />
        <Profile
          title="Dra. Cynthia G. Reyes Hernández"
          position="4 years in PhD program"
          bio="Currently: Dermatologist in IMSS Hospital General de Monterrey (Mexico)"
        />
      </Container>
      <Container>
        <h2>PhD Thesis by the Group</h2>
        <Feed>
          {education.map((thesis, index) => (
            <Card
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
