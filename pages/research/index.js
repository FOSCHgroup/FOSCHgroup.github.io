import Accordion from "../../ui/accordion/accordion";
import Container from "../../components/container/container";
import Layout from "../../components/layout/layout";
import Feed from "../../components/feed/feed";
import List from "../../ui/list/list";
import ListItem from "../../ui/list-item/list-item";
import research from "../../public/data/research.json";
import styles from "./research.module.css";
import projects from "../../public/data/projects.json";
import Link from "../../ui/link/link";

export default function ResearchPage() {
  return (
    <Layout title="Our Research" banner="/images/headers/research.svg">
      <Container>
        <h2>Research Topics</h2>
      </Container>
      <Container>
        <h2>Competitive Projects</h2>
        <List>
          {projects.competitive.map((project, index) => (
            <ListItem className={styles.project} key={index}>
              <div className={styles.name}>{project.name}</div>
              <div className={styles.dates}>{project.dates}</div>
              <div className={styles.organization}>{project.organization}</div>
            </ListItem>
          ))}
        </List>
      </Container>
      <Container>
        <h2>Industry-Transferency Projects</h2>
        <List>
          {projects.industry.map((project, index) => (
            <ListItem className={styles.project} key={index}>
              <div className={styles.name}>{project.name}</div>
              <div className={styles.dates}>{project.dates}</div>
              <div className={styles.organization}>{project.organization}</div>
            </ListItem>
          ))}
        </List>
      </Container>
      <Container>
        <h2>Networking Cooperation Projects</h2>
        <List>
          {projects.networking.map((project, index) => (
            <ListItem className={styles.project} key={index}>
              <div className={styles.name}>{project.name}</div>
              <div className={styles.dates}>{project.dates}</div>
              <div className={styles.organization}>{project.organization}</div>
            </ListItem>
          ))}
        </List>
      </Container>
      <Container>
        <h2>Articles</h2>
        <Accordion title="Food Technology & Developmental of New Ingredients">
          <List>
            {research.foodTech.map((article, index) => (
              <ListItem key={index}>
                <div className={styles.article}>
                  <Link href={article.link}>{article.title}</Link>
                  <div>{article.abstract}</div>
                  {article.image && (
                    <img alt={article.title} src={article.image} />
                  )}
                </div>
              </ListItem>
            ))}
          </List>
        </Accordion>
        <Accordion title="Gestational Health & Pregnancy Epidemiology">
          <List>
            {research.gestationalHealth.map((article, index) => (
              <ListItem key={index}>
                <div className={styles.article}>
                  <Link href={article.link}>{article.title}</Link>
                  <div>{article.abstract}</div>
                  {article.image && (
                    <img alt={article.title} src={article.image} />
                  )}
                </div>
              </ListItem>
            ))}
          </List>
        </Accordion>
        <Accordion title="Fetal Progaming of Cardiovascular Disease: Sex differences & Maternal Undernutrition">
          <List>
            {research.fetalProgaming.map((article, index) => (
              <ListItem key={index}>
                <div className={styles.article}>
                  <Link href={article.link}>{article.title}</Link>
                  <div>{article.abstract}</div>
                  {article.image && (
                    <img alt={article.title} src={article.image} />
                  )}
                </div>
              </ListItem>
            ))}
          </List>
        </Accordion>
        <Accordion title="General Nutrition & Healthy Habits in Lactation Period: Nutrition & Psychological Stage">
          <List>
            {research.generalNutrition.map((article, index) => (
              <ListItem key={index}>
                <div className={styles.article}>
                  <Link href={article.link}>{article.title}</Link>
                  <div>{article.abstract}</div>
                  {article.image && (
                    <img alt={article.title} src={article.image} />
                  )}
                </div>
              </ListItem>
            ))}
          </List>
        </Accordion>
        <Accordion title="Nutrition During Neonatal Period">
          <List>
            {research.neonatalNutrition.map((article, index) => (
              <ListItem key={index}>
                <div className={styles.article}>
                  <Link href={article.link}>{article.title}</Link>
                  <div>{article.abstract}</div>
                  {article.image && (
                    <img alt={article.title} src={article.image} />
                  )}
                </div>
              </ListItem>
            ))}
          </List>
        </Accordion>
        <Accordion title="Models to Explore Cardiovascular Health">
          <List>
            {research.cardiovascularHealth.map((article, index) => (
              <ListItem key={index}>
                <div className={styles.article}>
                  <Link href={article.link}>{article.title}</Link>
                  <div>{article.abstract}</div>
                  {article.image && (
                    <img alt={article.title} src={article.image} />
                  )}
                </div>
              </ListItem>
            ))}
          </List>
        </Accordion>
        <Accordion title="Reviews">
          <List>
            {research.reviews.map((article, index) => (
              <ListItem key={index}>
                <div className={styles.article}>
                  <Link href={article.link}>{article.title}</Link>
                  <div>{article.abstract}</div>
                  {article.image && (
                    <img alt={article.title} src={article.image} />
                  )}
                </div>
              </ListItem>
            ))}
          </List>
        </Accordion>
      </Container>
      <Container>
        <h2>Books and Chapters</h2>
        <Feed>
          {research.books.map((article, index) => (
            <div key={index}>
              <div className={styles.article}>
                {article.image && (
                  <img alt={article.title} src={article.image} />
                )}
                <Link href={article.link}>{article.title}</Link>
                <div>{article.abstract}</div>
              </div>
            </div>
          ))}
        </Feed>
      </Container>
    </Layout>
  );
}
