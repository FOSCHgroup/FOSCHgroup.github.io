import Accordion from "../ui/accordion/accordion";
import Container from "../ui/container/container";
import Layout from "../components/layout/layout";
import Feed from "../components/feed/feed";
import List from "../ui/list/list";
import research from "../public/data/research.json";
import projects from "../public/data/projects.json";
import Link from "../ui/link/link";
import Project from "../components/project/project";
import Typography from "../ui/typography/typography";
import Card from "../ui/card/card";
import CardMedia from "../ui/card-media/card-media";
import CardContent from "../ui/card-content/card-content";
import Article from "../components/article/article";

export default function ResearchPage() {
  return (
    <Layout title="Our Research">
      <Container>
        <Typography component="h2">Research Topics</Typography>
        <p>Oxidative Stress pathways implicated in fetal programming</p>
        <img src="/images/research_topic/fetal_programming.png"/>
        <p>Cardiovascular disease and explicatory mechanism</p>
        <img src="/images/research_topic/cardiovascular_health.png"/>
        <p>Promoting healthy habits since the begining of life</p>
        <img src="/images/research_topic/health_promotion.png"/>
        <p>Search new strategies for new food ingredients</p>
        <p>Improving health under nutritional approaches</p>
        <p>Bioactivity of foods on cardiovascular health </p>
        <img src="/images/research_topic/cocoa_improve.png"/>
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
