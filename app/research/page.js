import Accordion from "../../ui/accordion/accordion";
import Container from "../../ui/container/container";
import Layout from "../../components/layout/layout";
import Feed from "../../components/feed/feed";
import List from "../../ui/list/list";
import research from "/public/data/research.json";
import projects from "/public/data/projects.json";
import Link from "../../ui/link/link";
import Project from "../../components/project/project";
import Typography from "../../ui/typography/typography";
import Card from "../../ui/card/card";
import CardMedia from "../../ui/card-media/card-media";
import CardHeader from "../../ui/card-header/card-header";
import CardContent from "../../ui/card-content/card-content";
import Article from "../../components/article/article";
import researchTopics from "/public/data/research-topics.json";

export default function ResearchPage() {
  return (
    <Layout title="Our Research">
      <Container>
        <Typography component="h2">Research Topics</Typography>
        <Feed>
          {researchTopics.map((researchTopic, index) => (
            <Card key={index}>
              <CardHeader title={researchTopic.title} />
              <CardMedia image={researchTopic.image} />
            </Card>
          ))}
        </Feed>
      </Container>
      <Container>
        <Typography component="h2">Competitive Projects</Typography>
        <List>
          {projects.competitive.map((project, index) => (
            <Project project={project} key={index} />
          ))}
        </List>
      </Container>
      <Container>
        <Typography component="h2">Industry-Transferency Projects</Typography>
        <List>
          {projects.industry.map((project, index) => (
            <Project project={project} key={index} />
          ))}
        </List>
      </Container>
      <Container>
        <Typography component="h2">Networking Cooperation Projects</Typography>
        <List>
          {projects.networking.map((project, index) => (
            <Project project={project} key={index} />
          ))}
        </List>
      </Container>
      <Container>
        <Typography component="h2">Articles</Typography>
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
        <Typography component="h2">Books and Chapters</Typography>
        <Feed>
          {research.books.map((article, index) => (
            <Card key={index}>
              <CardMedia alt={article.title} image={article.image} />
              <CardContent>
                <Typography>
                  <Link href={article.link}>{article.title}</Link>
                </Typography>
                <Typography>{article.abstract}</Typography>
              </CardContent>
            </Card>
          ))}
        </Feed>
      </Container>
    </Layout>
  );
}
