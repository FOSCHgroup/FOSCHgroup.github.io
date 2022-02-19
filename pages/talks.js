import Container from "../ui/container/container";
import Layout from "../components/layout/layout";
import talks from "../public/data/talks.json";
import Feed from "../components/feed/feed";
import Card from "../ui/card/card";
import CardContent from "../ui/card-content/card-content";
import CardMedia from "../ui/card-media/card-media";

export default function TalksPage() {
  return (
    <Layout title="News & Talks">
      <Container>
        <h2>News in Social Media</h2>
        <Feed>
          {talks
            .filter(({ section }) => section === "news")
            .map((talk, index) => (
              <Card key={index}>
                <CardMedia image={talk.image || talk.video} alt={talk.title} />
                <CardContent>
                  <div>
                    <a target="_blank" rel="noreferrer" href={talk.link}>
                      {talk.title}
                    </a>
                  </div>
                  <div>{talk.date}</div>
                </CardContent>
              </Card>
            ))}
        </Feed>
      </Container>
      <Container>
        <h2>Contribution to Society</h2>
        <Feed>
          {talks
            .filter(({ section }) => section === "contribution")
            .map((talk, index) => (
              <Card key={index}>
                <CardMedia
                  image={talk.image}
                  video={talk.video}
                  alt={talk.title}
                />
                <CardContent>
                  <div>
                    <a target="_blank" rel="noreferrer" href={talk.link}>
                      {talk.title}
                    </a>
                  </div>
                  <div>{talk.date}</div>
                </CardContent>
              </Card>
            ))}
        </Feed>
      </Container>
    </Layout>
  );
}
