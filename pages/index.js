import Container from "../components/container/container";
import Layout from "../components/layout/layout";
import Carousel from "../components/carousel/carousel";
import Link from "next/link";
import talks from "../public/data/talks.json";
import Grid from "../components/grid/grid";
import GridItem from "../components/grid-item/grid-item";

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
          src="/images/presentación2.jpg"
        />
      </Container>
      <Container>
        <h2>Work address and Laboratories</h2>
        <Grid>
          <GridItem>
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
              Lab: C/ Nicolás Cabrera 9, Cantoblanco, 28049 Madrid, Spain
            </p>
          </GridItem>
          <GridItem>
            <h3>Oxidative Stress, Fetal Programming and Cardiometabolic Health</h3>
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
              Lab: C/ Arzobispo Morcillo 2, 28029 Madrid, Spain
            </p>
          </GridItem>
        </Grid>
      </Container>
      <Container>
        <h2>
          <Link href="/talks">News</Link>
        </h2>
        <Carousel data={talks} />
      </Container>
    </Layout>
  );
}
