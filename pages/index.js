import Container from "../ui/container/container";
import Layout from "../components/layout/layout";
import Carousel from "../components/carousel/carousel";
import Link from "next/link";
import talks from "../public/data/talks.json";
import Grid from "../components/grid/grid";
import GridItem from "../components/grid-item/grid-item";
import Typography from "../ui/typography/typography";

export default function IndexPage() {
  return (
    <Layout title="FOSCH Research Group">
      <Container>
        <h2>Foods, Oxidative Stress & Cardiovascular Health</h2>
        <Typography>
          Welcome to the official website of the multidisciplinary research
          group on Food, Oxidative Stress and Cardiovascular Health (FOSCH)!
        </Typography>
        <Typography>
          FOSCH is part of the scientific teams of the Universidad Autónoma de
          Madrid (UAM, Spain). The fundamental mission is to study the
          properties and bioactive compounds of foods in relation to the
          promotion and well-being of cardiovascular health, as well as the
          development of new food products through sustainable ecology and to
          explore the role of the oxidative status in modulating cardiovascular
          disease.
        </Typography>
        <Typography>
          FOSCH is led by Dr. Silvia M. Arribas, Physiologist of the Faculty of
          Medicine and Dr. Maria A. Martin, Bromatologist of the Faculty of
          Sciences of the UAM.
        </Typography>
        <Typography>Learn more about our contribution to science!</Typography>
      </Container>
      <Container>
        <img
          alt="Foods, Oxidative Stress, and Cardiovascular Health"
          src="/images/FOSCH_logo.png"
          style={{ maxWidth: "100%", display: "block", margin: "auto" }}
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
