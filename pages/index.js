import Container from "../components/container/container";
import Layout from "../components/layout/layout";

export default function IndexPage() {
  return (
    <Layout title="FOSCH Research Group">
      <Container>
        <h2>Foods, Oxidative Stress, and Cardiovascular Health</h2>
        <img
          alt="Foods, Oxidative Stress, and Cardiovascular Health"
          src="/imagenes/fosch.jpg"
        />
      </Container>
    </Layout>
  );
}
