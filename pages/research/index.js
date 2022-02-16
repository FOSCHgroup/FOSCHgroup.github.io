import Accordion from "../../components/accordion/accordion";
import Container from "../../components/container/container";
import Layout from "../../components/layout/layout";
import Feed from "../../components/feed/feed";
import List from "../../components/list/list";
import ListItem from "../../components/list-item/list-item";
import research from "../../public/data/research.json";
import styles from "./research.module.css";

export default function AboutPage() {
  return (
    <Layout title="Our Research" banner="/images/headers/research.svg">
      <Container>
        <h2>Research Topics</h2>
      </Container>
      <Container>
        <h2>Competitive Projects</h2>
        <List>
          <ListItem>
            <div>
              2013-2016. Oxidative stress and fetal programming of
              cardiovascular disease (FEM2012-37634-C03-01)
            </div>
            <div>Ministry of Economy and Competitiveness (Spain)</div>
          </ListItem>
          <ListItem>
            <div>
              2016-2019. Effect of supplementation with DHA on oxidative stress
              associated with low birth weight (FEM2015-63631-R)
            </div>
            <div>Ministry of Economy and Competitiveness (Spain)</div>
          </ListItem>
          <ListItem>
            <div>
              2015-2018. Sustainable coffee production and consumption:
              validation of by-products as food ingredients (AGL2014-57239-R)
            </div>
            <div>Ministry of Economy and Competitiveness (Spain)</div>
          </ListItem>
          <ListItem>
            <h3>New ingredient & Cardiovascular health</h3>
            <div>
              2019-2021. Antioxidant ingredients from coffee as a strategy to
              reprogram cardiometabolic disease through lactation
              (ARTI2018-097504-B-I00)
            </div>
            <div>Ministry of Science (Spain)</div>
          </ListItem>
        </List>
      </Container>
      <Container>
        <h2>Industry-Transferency Projects</h2>
        <List>
          <ListItem>
            <div>
              2019-2020. Validation of new food ingredients for the development
              of anti-obesity nutraceuticals (PFTC-19)
            </div>
            <div>
              Universidad Autónoma de Madrid (Spain) - AORA Health S.L. Company
            </div>
          </ListItem>
          <ListItem>
            <div>
              2020-2022. Characterization of Bioactive Compounds in Breast Milk
              for the Improvement of Infant Formulas (PFTC-20)
            </div>
            <div>
              Universidad Autónoma de Madrid (Spain) - Alter Farmacia
              S.A.-Nutribén Company
            </div>
          </ListItem>
        </List>
      </Container>
      <Container>
        <h2>Networking Cooperation Projects</h2>
        <List>
          <ListItem>
            <div>
              2011-2012. Creation of basic research lines with National
              University of Singapore (2011/ASIA/01)
            </div>
            <div>Santander Bank (Spain) - Singapore</div>
          </ListItem>
          <ListItem>
            <div>
              2015-2016. Interuniversity network in nutrition and perinatal
              health (2015/EEUU/01)
            </div>
            <div>Santander Bank (Spain) - USA</div>
          </ListItem>
          <ListItem>
            <div>
              2017-2018. Strategy for the design of sustainable food ingredients
              (2017/EEUU/01)
            </div>
            <div>Santander Bank (Spain) - USA</div>
          </ListItem>
        </List>
      </Container>
      <Container>
        <h2>Articles</h2>
        <Accordion title="Food Technology & Developmental of New Ingredients">
          <List>
            {research.foodTech.map((article, index) => (
              <ListItem key={index}>
                <div className={styles.article}>
                  <a target="_blank" rel="noreferrer" href={article.link}>
                    {article.title}
                  </a>
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
                  <a target="_blank" rel="noreferrer" href={article.link}>
                    {article.title}
                  </a>
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
                  <a target="_blank" rel="noreferrer" href={article.link}>
                    {article.title}
                  </a>
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
                  <a target="_blank" rel="noreferrer" href={article.link}>
                    {article.title}
                  </a>
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
                  <a target="_blank" rel="noreferrer" href={article.link}>
                    {article.title}
                  </a>
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
                  <a target="_blank" rel="noreferrer" href={article.link}>
                    {article.title}
                  </a>
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
                  <a target="_blank" rel="noreferrer" href={article.link}>
                    {article.title}
                  </a>
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
                <a target="_blank" rel="noreferrer" href={article.link}>
                  {article.title}
                </a>
                <div>{article.abstract}</div>
              </div>
            </div>
          ))}
        </Feed>
      </Container>
    </Layout>
  );
}
