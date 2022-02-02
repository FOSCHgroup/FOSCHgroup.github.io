import Container from "../components/container/container";
import Layout from "../components/layout/layout";
import talks from "../public/data/talks.json";
import TalksFeed from "../page-components/talks/talks-feed/talks-feed";

export default function DivulgacionPage() {
  return (
    <Layout title="News & Talks">
      <Container>
        <h2>News in Social Media</h2>
        <TalksFeed talks={talks} section="news" />
      </Container>
      <Container>
        <h2>Contribution to Society</h2>
        <TalksFeed talks={talks} section="contribution" />
      </Container>
    </Layout>
  );
}
