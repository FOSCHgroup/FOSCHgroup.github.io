import Container from "../components/container/container";
import Layout from "../components/layout/layout";

export default function IndexPage() {
  return (
    <Layout titulo="Grupo de Investigación FOSCH">
      <Container>
        <h2>Alimentos, estrés oxidativo y salud cardiovascular</h2>
        <img src="/imagenes/fosch.jpg" />
      </Container>
    </Layout>
  );
}
