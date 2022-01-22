import Container from "../components/container/container";
import Layout from "../components/layout/layout";

export default function AboutPage() {
  return (
    <Layout titulo="Nuestra Formación">
      <Container>
        <h2>Técnicas de Investigación</h2>
        <img src="https://placekitten.com/g/250/250" />
        <h2>Estudiantes pre/post-Doctorales</h2>
      </Container>
    </Layout>
  );
}
