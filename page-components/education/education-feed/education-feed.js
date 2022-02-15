import Feed from "../../../components/feed/feed";
import EducationCard from "../education-card/education-card";

export default function EducationFeed({ education, filter }) {
  let theses = education;

  if (filter) {
    theses = theses.filter(({ areas }) => areas.includes(filter));
  }

  return (
    <Feed>
      {theses.map((thesis, index) => (
        <EducationCard
          key={index}
          title={thesis.title}
          bio={thesis.name}
          link={thesis.link}
          date={thesis.date}
          areas={thesis.areas}
        />
      ))}
    </Feed>
  );
}
