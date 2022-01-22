import Container from "../components/container/container";
import Layout from "../components/layout/layout";

export default function AboutPage() {
  return (
    <Layout titulo="Nuestra Investigación">
      <Container>
        <h2>Líneas de Investigación</h2>
        <img src="https://placekitten.com/g/250/250" />
        <h2>Proyectos de Investigación Competitivos</h2>
        <h2>Proyectos con la Industria</h2>
        <h2>Artículos Originales</h2>
        <h2>Revisiones</h2>
        <h2>Libros y Capítulos</h2>
      </Container>
    </Layout>
  );
}
