import Container from "../components/container/container";
import Layout from "../components/layout/layout";
import Profile from "../components/profile/profile";

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
        <Profile
            title="Dehydrated legume flours: nutritional characterization and evaluation of their techno-functional properties"
            bio="Dra. Yolanda Aguilera Gutiérrez"
            link="https://repositorio.uam.es/handle/10486/4180"
          />
        <Profile
            title="Oxidative stress in cardiovascular alterations associated with fetal programming of hypertension"
            bio="Dra. Pilar Rodríguez Rodríguez"
            link="https://dialnet.unirioja.es/servlet/tesis?codigo=53787"
          />
          <Profile
            title="Vascular structural and mechanical alterations associated with fetal programming of hypertension"
            bio="Dra. Perla Y. Gutiérrez Arzapalo"
            link="https://repositorio.uam.es/handle/10486/676668"
          />
          <Profile
            title="Characterization of onion by-products as a source of dietary fiber and other bioactive compounds"
            bio="Dra. Vanesa Benítez García"
            link="https://repositorio.uam.es/handle/10486/7754"
          />
          <Profile
            title="Biomarkers predictive of the development of maternal and fetal complications"
            bio="Dr. David Ramiro Cortijo"
            link="https://repositorio.uam.es/handle/10486/685312"
          />
        <Profile
            title="Influence of nutritional interventions during gestation on fetal development in the rat"
            bio="Dra. Cynthia G. Reyes Hernández"
            link="https://repositorio.uam.es/handle/10486/686709"
          />
          <Profile
            title="Strategies for the Valorization of Coffee and Cocoa By-products"
            bio="Dr. Miguel Rebollo Hernánz"
            link="https://repositorio.uam.es/handle/10486/697219"
          />
        <Profile
            title="Composition of breast milk in the first month of lactation"
            bio="Dra. Andrea Gila Díaz"
            link="https://repositorio.uam.es/handle/10486/696535"
          />
      </Container>
    </Layout>
  );
}
