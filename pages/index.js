import Container from "../components/container/container";
import Layout from "../components/layout/layout";
import Card from "../components/card/card";
import Carousel from "../components/carousel/carousel";
import Link from "next/link";

export default function IndexPage() {
  return (
    <Layout title="FOSCH Research Group">
      <Container>
        <h2>Foods, Oxidative Stress & Cardiovascular Health</h2>
        <p>
          Our focus is to study the bioavailability, biotransformation,
          biokinetics and bioeffects of phytochemicals from by-products to
          prevent cardiometabolic diseases.
        </p>
        <img
          alt="Foods, Oxidative Stress, and Cardiovascular Health"
          src="/images/fosch.jpg"
        />
      </Container>
      <Container>
        <h2>Work address and Laboratories</h2>
        <div className="grid">
          <div>
            <h3>Food Technology and New Ingredient Development</h3>
            <p>
              Department of Agricultural Chemistry and Bromatology
              <br />
              Faculty of Sciences
              <br />
              Department of Production and Characterization of Novel Foods
              <br />
              Institute of Food Science Research (CIAL-CSIC)
              <br />
              Universidad Autonónoma de Madrid
              <br />
              Laboratory: C/ Nicolás Cabrera 9, Campus de Cantoblanco - 28049
              Madrid, Spain
            </p>
          </div>

          <div>
            <h3>
              Oxidative Stress, Fetal Programming and Cardiometabolic Health
            </h3>
            <p>
              Department of Physiology
              <br />
              Department of of Preventive Medicine, Public Health and
              Microbiology
              <br />
              Faculty of Medicine
              <br />
              Universidad Autonónoma de Madrid
              <br />
              Laboratory: C/ Arzobispo Morcillo 2, 28029 Madrid, Spain
            </p>
          </div>
        </div>
      </Container>
      <Container>
        <h2>
          <Link href="/news">News</Link>
        </h2>
        <Carousel>
        <Card>
          <img src="https://www.madrimasd.org/uploads/autumn-1850044_960_720.jpg" />
            <h3>Insufficient nutrition in the fetal stage predisposes to the development of cardiovascular diseases</h3>
          </Card>
        <Card>
          <img src="https://www.madrimasd.org/uploads/noti7_11_12_20.jpg" />
            <h3>Fetal sex affects on inflammatory cytokine and nitric oxide levels in the pregnant woman</h3>
          </Card>
          <Card>
          <img src="https://www.bonka.es/themes/custom/bonka/img/donde_viene_cafe_1.jpg" />
            <h3>New beneficial properties discovered in coffee husks</h3>
          </Card>
          <Card>
            <img src="https://pbs.twimg.com/media/EHjY_S7WkAAbgrw?format=jpg&name=small" />
            <h3>Conference on the innovations in precision nutrition</h3>
          </Card>
          <Card>
            <img src="https://pbs.twimg.com/media/EIHgPnjX0AEp7EJ?format=jpg&name=small" />
            <h3>Programming cardiovascular disease: an ontological perspective</h3>
          </Card>
          <Card>
            <img src="https://www.youtube.com/watch?v=8Ao0FkFun1s" />
            <h3>InnoUAM_BioHealth</h3>
          </Card>
          <Card>
            <img src="https://i.ytimg.com/vi/hkdPk4pAo40/maxresdefault.jpg" />
            <h3>Biomarkers of oxidative stress for diagnostics</h3>
          </Card>
        </Carousel>
      </Container>
    </Layout>
  );
}
