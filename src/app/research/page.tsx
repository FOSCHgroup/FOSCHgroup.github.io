import Accordion from "@/ui/accordion/accordion";
import Article from "@/components/article/article";
import Container from "@/ui/container/container";
import Feed from "@/components/feed/feed";
import Hero from "@/components/hero/hero";
import Link from "@/ui/link/link";
import List from "@/ui/list/list";
import Project from "@/app/research/project";
import projects from "./projects.json";
import research from "./research.json";
import researchTopics from "./research-topics.json";

export default function ResearchPage() {
  return (
    <>
      <Hero title="Our Research" />
      <Container>
        <h2 className="title is-3">Research Topics</h2>
        <Feed>
          {researchTopics.map((researchTopic, index) => (
            <div className="card" key={index}>
              <header className="card-header">
                <p className="card-header-title">{researchTopic.title}</p>
              </header>
              <div className="card-image">
                <figure className="image is-4by3">
                  <img src={researchTopic.image} alt={researchTopic.title} />
                </figure>
              </div>
            </div>
          ))}
        </Feed>
      </Container>
      <Container>
        <h2 className="title is-3">Competitive Projects</h2>
        <List>
          {projects.competitive.map((project, index) => (
            <Project project={project} key={index} />
          ))}
        </List>
      </Container>
      <Container>
        <h2 className="title is-3">Industry-Transferency Projects</h2>
        <List>
          {projects.industry.map((project, index) => (
            <Project project={project} key={index} />
          ))}
        </List>
      </Container>
      <Container>
        <h2 className="title is-3">Networking Cooperation Projects</h2>
        <List>
          {projects.networking.map((project, index) => (
            <Project project={project} key={index} />
          ))}
        </List>
      </Container>
      <Container>
        <h2 className="title is-3">Articles</h2>
        <Accordion title="Food Technology & Developmental of New Ingredients">
          <List>
            {research.foodTech.map((article, index) => (
              <Article key={index} article={article} />
            ))}
          </List>
        </Accordion>
        <Accordion title="Gestational Health & Pregnancy Epidemiology">
          <List>
            {research.gestationalHealth.map((article, index) => (
              <Article key={index} article={article} />
            ))}
          </List>
        </Accordion>
        <Accordion title="Fetal Programming of Cardiovascular Disease: Sex differences & Maternal Undernutrition">
          <List>
            {research.fetalProgaming.map((article, index) => (
              <Article key={index} article={article} />
            ))}
          </List>
        </Accordion>
        <Accordion title="General Nutrition & Healthy Habits in Lactation Period: Nutrition & Psychological Stage">
          <List>
            {research.generalNutrition.map((article, index) => (
              <Article key={index} article={article} />
            ))}
          </List>
        </Accordion>
        <Accordion title="Nutrition During Neonatal Period">
          <List>
            {research.neonatalNutrition.map((article, index) => (
              <Article key={index} article={article} />
            ))}
          </List>
        </Accordion>
        <Accordion title="Models to Explore Cardiovascular Health">
          <List>
            {research.cardiovascularHealth.map((article, index) => (
              <Article key={index} article={article} />
            ))}
          </List>
        </Accordion>
        <Accordion title="Reviews">
          <List>
            {research.reviews.map((article, index) => (
              <Article key={index} article={article} />
            ))}
          </List>
        </Accordion>
        <Accordion title="Collaborations">
          <List>
            {research.Collaborations.map((article, index) => (
              <Article key={index} article={article} />
            ))}
          </List>
        </Accordion>
      </Container>
      <Container>
        <h2 className="title is-3">Books and Chapters</h2>
        <Feed>
          {research.books.map((article, index) => (
            <div className="card" key={index}>
              <div className="card-image">
                <figure className="figure is-3by5">
                  <img
                    alt={article.title}
                    src={article.image}
                    style={{ width: "100%" }}
                  />
                </figure>
              </div>
              <div className="card-content">
                <div className="content">
                  <Link href={article.link}>{article.title}</Link>
                </div>
              </div>
            </div>
          ))}
        </Feed>
      </Container>
    </>
  );
}
