import CardMedia from "@/ui/card-media/card-media";
import Container from "@/ui/container/container";
import Feed from "@/components/feed/feed";
import Hero from "@/components/hero/hero";
import Link from "@/ui/link/link";
import talks from "@/data/talks.json";

export default function TalksPage() {
  return (
    <>
      <Hero title="News & Talks" />
      <Container>
        <h2 className="title is-3">News in Social Media</h2>
        <Feed>
          {talks
            .filter(({ section }) => section === "news")
            .map((talk, index) => (
              <div className="card" key={index}>
                <div className="card-image">
                  <CardMedia
                    image={talk.image || talk.video}
                    alt={talk.title}
                  />
                </div>
                <div className="card-content">
                  <div className="content">
                    <p className="title is-6">
                      <Link href={talk.link}>{talk.title}</Link>
                    </p>
                    {talk.date && <p>{talk.date}</p>}
                  </div>
                </div>
              </div>
            ))}
        </Feed>
      </Container>
      <Container>
        <h2 className="title is-3">Contribution to Society</h2>
        <Feed>
          {talks
            .filter(({ section }) => section === "contribution")
            .map((talk, index) => (
              <div className="card" key={index}>
                <CardMedia
                  image={talk.image}
                  video={talk.video}
                  alt={talk.title}
                />
                <div className="card-content">
                  <div className="content">
                    <p className="title is-6">
                      {talk.link ? (
                        <Link href={talk.link}>{talk.title}</Link>
                      ) : (
                        talk.title
                      )}
                    </p>
                    <p>{talk.date}</p>
                  </div>
                </div>
              </div>
            ))}
        </Feed>
      </Container>
    </>
  );
}
