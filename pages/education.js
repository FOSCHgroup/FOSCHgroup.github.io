import Container from "../components/container/container";
import Layout from "../components/layout/layout";
import Profile from "../components/profile/profile";
import EducationFeed from "../page-components/education/education-feed/education-feed";
import education from "../public/data/education.json";

export default function AboutPage() {
  return (
    <Layout title="Postgraduate Educational Programming">
      <Container>
        <h2>Research Techniques</h2>
      </Container>
      <Container>
        <h2>Researchers trained in our group</h2>
        <Profile
          name="Dra. Parichat Prachaney"
          position="4 months in Specialty program"
          bio="Currently: Professor of Physiology, Khon Kaen University (Thailand)"
        />
        <Profile
          name="Dra. Perla Y. Gutierrez Arzapalo"
          position="4 years in PhD program"
          bio="Currently: Assosiate Professor in the Research Center in Health Sciences, Universidad Autónoma de Sinaloa (Sinaloa, Mexico)"
        />
        <Profile
          name="Dra. Sophida Puthong"
          position="1 year in Specialty program"
          bio="Currently: Associate Professor of Physiology, Khon Kaen University (Thailand)"
        />
        <Profile
          name="Romain Sauvestre"
          position="8 months in MSc program"
          bio="Currently: Researcher, University of Poitiers (France)"
        />
        <Profile
          name="Dra. Cynthia G. Reyes Hernández"
          position="4 years in PhD program"
          bio="Currently: Dermatologist in IMSS Hospital General de Monterrey (Mexico)"
        />
        <Profile
          name="Anuson Poasakate"
          position="6 months in PhD program"
          bio="Currently: Researcher Khon Kaen University (Thailand)"
        />
      </Container>
      <Container>
        <h2>PhD Thesis by the Group</h2>
        <EducationFeed education={education} />
      </Container>
    </Layout>
  );
}
