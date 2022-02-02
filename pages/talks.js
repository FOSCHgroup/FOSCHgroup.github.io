import Container from "../components/container/container";
import Layout from "../components/layout/layout";
import Card from "../components/card/card";
import talks from "../public/data/talks.json";
import Feed from "../components/feed/feed";

export default function DivulgacionPage() {
  return (
    <Layout title="News & Talks">
      <Container>
        <h2>News in Social Media</h2>
        <Feed>
          {talks
            .filter(({ section }) => section === "news")
            .map((talk, index) => (
              <Card
                key={index}
                image={talk.image}
                title={talk.title}
                link={talk.link}
                video={talk.video}
                date={talk.date}
              />
            ))}
        </Feed>
      </Container>
      <Container>
        <h2>Contribution to Society</h2>
        <Feed>
          {talks
            .filter(({ section }) => section === "contribution")
            .map((talk, index) => (
              <Card
                key={index}
                image={talk.image}
                title={talk.title}
                link={talk.link}
                video={talk.video}
                date={talk.date}
              />
            ))}
        </Feed>
      </Container>
    </Layout>
  );
}
