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
            <h3>Area of Food Technology and New Ingredient Development</h3>
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
              Area of Oxidavive Stress, Fetal Programming and Cardiometabolic
              Health
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
            <img src="https://placekitten.com/g/250/250" />
            <h3>FOSCH Group is Crazy About Kittens</h3>
          </Card>
          <Card>
            <img src="https://placekitten.com/g/250/250" />
            <h3>FOSCH Group is Crazy About Kittens</h3>
          </Card>
          <Card>
            <img src="https://placekitten.com/g/250/250" />
            <h3>FOSCH Group is Crazy About Kittens</h3>
          </Card>
        </Carousel>
      </Container>
    </Layout>
  );
}
