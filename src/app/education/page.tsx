import Container from "@/ui/container/container";
import Hero from "@/components/hero/hero";
import List from "@/ui/list/list";
import Theses from "@/app/education/theses";
import researchers from "@/data/researchers.json";
import techniques from "@/data/techniques.json";

export default function EducationPage() {
  return (
    <>
      <Hero title="Postgraduate Educational Programming" />
      <Container>
        <h2 className="title is-3">Research Techniques</h2>
        <List>
          {techniques.map((technique, index) => (
            <li className="media" key={index}>
              <div className="media-left">
                <figure className="image is-128x128">
                  {technique.image && (
                    <img
                      className="is-square"
                      src={technique.image}
                      alt={technique.name}
                    />
                  )}
                </figure>
              </div>
              <div className="media-content">
                <p className="title is-6">{technique.name}</p>
                <p>{technique.description}</p>
              </div>
            </li>
          ))}
        </List>
      </Container>
      <Container>
        <h2 className="title is-3">Researchers trained in our group</h2>
        <List>
          {researchers.map((researcher, index) => (
            <li className="content" key={index}>
              <p className="title is-6 mb-5">{researcher.name}</p>
              <p className="subtitle is-6 mb-0">{researcher.position}</p>
              <p>{researcher.bio}</p>
            </li>
          ))}
        </List>
      </Container>
      <Container>
        <h2 className="title is-3">PhD Thesis by the Group</h2>
        <Theses />
      </Container>
    </>
  );
}
