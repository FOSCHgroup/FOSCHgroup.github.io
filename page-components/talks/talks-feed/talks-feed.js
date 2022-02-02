import Card from "../../../components/card/card";
import Feed from "../../../components/feed/feed";

export default function TalksFeed({ talks, section }) {
  return (
    <Feed>
      {talks
        .filter(({ section: talksSection }) => talksSection === section)
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
  );
}
