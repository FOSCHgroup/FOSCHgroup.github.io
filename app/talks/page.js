import Container from "../../ui/container/container";
import Layout from "../../components/layout/layout";
import talks from "/public/data/talks.json";
import Feed from "../../components/feed/feed";
import Card from "../../ui/card/card";
import CardContent from "../../ui/card-content/card-content";
import CardMedia from "../../ui/card-media/card-media";
import Typography from "../../ui/typography/typography";
import Link from "../../ui/link/link";

export default function TalksPage() {
  return (
    <Layout title="News & Talks">
      <Container>
        <Typography component="h2">News in Social Media</Typography>
        <Feed>
          {talks
            .filter(({ section }) => section === "news")
            .map((talk, index) => (
              <Card key={index}>
                <CardMedia image={talk.image || talk.video} alt={talk.title} />
                <CardContent>
                  <Typography component="div" variant="h4">
                    <Link href={talk.link}>{talk.title}</Link>
                  </Typography>
                  <Typography component="div">{talk.date}</Typography>
                </CardContent>
              </Card>
            ))}
        </Feed>
      </Container>
      <Container>
        <Typography component="h2">Contribution to Society</Typography>
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
                  <Typography component="div">
                    {talk.link ? (
                      <Link href={talk.link}>{talk.title}</Link>
                    ) : (
                      talk.title
                    )}
                  </Typography>
                  <Typography variant="body2" component="div">
                    {talk.date}
                  </Typography>
                </CardContent>
              </Card>
            ))}
        </Feed>
      </Container>
    </Layout>
  );
}
