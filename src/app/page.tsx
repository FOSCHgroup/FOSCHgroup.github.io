import Carousel from "@/components/carousel/carousel";
import Container from "@/ui/container/container";
import Grid from "@/components/grid/grid";
import GridItem from "@/components/grid-item/grid-item";
import Hero from "@/components/hero/hero";
import Link from "next/link";
import styles from "./page.module.css";
import talks from "@/data/talks.json";

export default function Page() {
  return (
    <>
      <Hero title="FOSCH Research Group" />
      <Container>
        <h2 className="title is-3">
          Food, Oxidative Stress & Cardiovascular Health
        </h2>
        <p className="block">
          Welcome to the official website of the multidisciplinary research
          group on Food, Oxidative Stress and Cardiovascular Health (FOSCH)!
        </p>
        <p className="block">
          FOSCH is part of the scientific teams of the Universidad Autónoma de
          Madrid (UAM, Spain). The fundamental mission is to study the
          properties and bioactive compounds of foods in relation to the
          promotion and well-being of cardiovascular health, as well as the
          development of new food products through sustainable ecology and to
          explore the role of the oxidative status in modulating cardiovascular
          disease.
        </p>
        <p className="block">
          FOSCH is led by Dr. Silvia M. Arribas, Physiologist of the Faculty of
          Medicine and Dr. Maria A. Martin, Bromatologist of the Faculty of
          Sciences of the UAM.
        </p>
        <p className="block">Learn more about our contribution to science!</p>
        <img
          alt="Foods, Oxidative Stress, and Cardiovascular Health"
          src="/images/FOSCH_logo.png"
          className={styles.logo}
        />
      </Container>
      <Container>
        <h2 className="title is-3">Work Address and Laboratories</h2>
        <Grid>
          <GridItem>
            <div className="message">
              <div className="message-body">
                <p className="title is-6">
                  Food Technology and New Ingredient Development
                </p>
                <p className="block">
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
              </div>
            </div>
          </GridItem>
          <GridItem>
            <div className="message">
              <div className="message-body" style={{ height: "100%" }}>
                <p className="title is-6">
                  Oxidative Stress, Fetal Programming and Cardiometabolic Health
                </p>
                <p className="block">
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
              </div>
            </div>
          </GridItem>
        </Grid>
      </Container>
      <Container>
        <h2 className="title is-3">
          <Link href="/talks">News</Link>
        </h2>
        <Carousel data={talks} />
      </Container>
    </>
  );
}
