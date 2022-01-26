import Card from "../components/card/card";
import Container from "../components/container/container";
import Layout from "../components/layout/layout";

export default function News() {
  return (
    <Layout title="News">
      <Container>
        <Card>
          <img src="https://placekitten.com/g/250/250" />
          <h3>FOSCH Group is Crazy About Kittens</h3>
          <p>FOSCH Group teaches students about pussycats</p>
        </Card>
      </Container>
    </Layout>
  );
}
