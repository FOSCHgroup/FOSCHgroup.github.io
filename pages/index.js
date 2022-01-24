import Container from "../components/container/container";
import Layout from "../components/layout/layout";

export default function IndexPage() {
  return (
    <Layout title="FOSCH Research Group">
      <Container>
        <h2>Foods, Oxidative Stress & Cardiovascular Health</h2>
        <p>Our focus is to study the bioavailability, biotransformation, biokinetics and bioeffects of phytochemicals from by-products to prevent cardiometabolic diseases.</p>
        <img
          alt="Foods, Oxidative Stress, and Cardiovascular Health"
          src="/imagenes/fosch.jpg"
        />
      </Container>
      <Container>
        <h2>Work address and Laboratories</h2>
        <h3>Area of Food Technology and New Ingredient Development</h3>
        <p>Department of Agricultural Chemistry and Bromatology</p>
        <p>Faculty of Sciences</p>
        <p>Department of Production and Characterization of Novel Foods</p>
        <p>Institute of Food Science Research (CIAL-CSIC)</p>
        <p>Universidad Autonónoma de Madrid</p>
        <p>Laboratory: C/ Nicolás Cabrera 9, Campus de Cantoblanco - 28049 Madrid, Spain</p>
        
        <h3>Area of Oxidavive Stress, Fetal Programming and Cardiometabolic Health</h3>
        <p>Department of Physiology</p>
        <p>Department of of Preventive Medicine, Public Health and Microbiology</p>
        <p>Faculty of Medicine</p>
        <p>Universidad Autonónoma de Madrid</p>
        <p>Laboratory: C/ Arzobispo Morcillo 2, 28029 Madrid, Spain</p>
        </Container>
        <Container>
        <h2>News</h2>
      </Container>
    </Layout>
  );
}
