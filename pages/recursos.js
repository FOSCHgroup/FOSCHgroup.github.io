import Container from "../components/container/container";
import Layout from "../components/layout/layout";

export default function AboutPage() {
  return (
    <Layout titulo="Herramientas y Recursos">
      <Container>
        <img src="https://placekitten.com/g/250/250" />
        <h2>Contacta con nosotros</h2>
        <h2>Alojamientos</h2>
      </Container>
    </Layout>
  );
}
