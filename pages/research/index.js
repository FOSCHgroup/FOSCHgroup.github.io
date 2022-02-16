import Accordion from "../../components/accordion/accordion";
import Article from "../../components/article/article";
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
          <Article
            title="Role of fetal nutrient restriction and postnatal catch-up growth on structural and mechanical alterations of rat aorta"
            abstract="Fetal undernutrition induces similar aortic structural and mechanical alterations in young male and female rats. Our data argue against an early mechanical cause for the sex differences in hypertension development."
            link="https://physoc.onlinelibrary.wiley.com/doi/10.1113/JP275030"
            image="/images/research/JPHY_1.jpeg"
          />
          <Article
            title="Male fetal sex is associated with low maternal plasma anti-inflammatory cytokine profile in the first trimester of healthy pregnancies"
            abstract="Women with a male fetus may have a worse capacity to counteract an inflammatory response. They may have better vasodilator capacity, but in the presence of an oxidative environment, a higher nitrosative damage may occur."
            link="https://www.sciencedirect.com/science/article/abs/pii/S1043466620303069?via%3Dihub"
            image="/images/research/cytokines_1.png"
          />
          <Article
            title="Fetal undernutrition is associated with perinatal sex-dependent alterations in oxidative status"
            abstract="Adult males with maternal undernutrition (MUN) during gestation were hypertensive and exhibited the higher carbonyl levels compared to Controls. Adult MUN females were normotensive and did not exhibit differences in any of the biomarkers."
            link="https://www.sciencedirect.com/science/article/abs/pii/S0955286315001989?via%3Dihub"
          />
          <Article
            title="Long term effects of fetal undernutrition on rat heart. Role of hypertension and oxidative stress"
            abstract="During perinatal life, females exposed to fetal undernutrition are protected from cardiac alterations, but in ageing they exhibit ventricular hypertrophy and functional loss. The severity of cardiac damage might be greater in males due to hypertension."
            link="https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0171544"
          />
          <Article
            title="Sex Differences in Placental Protein Expression and Efficiency in a Rat Model of Fetal Programming Induced by Maternal Undernutrition"
            abstract="Male placenta has worse adaptation to undernutrition with lower efficiency, associated with oxidative disbalance and reduced vascularization and glucocorticoid barrier."
            link="https://www.mdpi.com/1422-0067/22/1/237"
            image="/images/research/IJMS_1.png"
          />
          <Article
            title="Fetal Undernutrition Induces Resistance Artery Remodeling and Stiffness in Male and Female Rats Independent of Hypertension"
            abstract="Fetal undernutrition induces resistence artery inward eutrophic remodeling and stiffness in both sexes. Resistance artery structural and mechanical alterations can participate in the development of hypertension in aged females."
            link="https://www.mdpi.com/2227-9059/8/10/424"
            image="/images/research/MRA_1.png"
          />
        </Accordion>
        <Accordion title="General Nutrition & Healthy Habits in Lactation Period: Nutrition & Psychological Stage">
          <Article
            title="Development and Validation of a Questionnaire to Assess Adherence to the Healthy Food Pyramid in Spanish Adults"
            abstract="AP-Q is a questionnaire to assess healthy food pyramid adherence, easy to complete, cost-effective, timesaving and has the competency to assess, besides diet, several features affecting health status."
            link="https://www.mdpi.com/2072-6643/12/6/1656"
          />
          <Article
            title="Assessment of Adherence to the Healthy Food Pyramid in Pregnant and Lactating Women"
            abstract="Breastfeeding mothers of young age and low socioeconomic/educational level would be the target population to carry out nutritional interventions that improve their adherence to the Healthy Foos Piramyd."
            link="https://www.mdpi.com/2072-6643/13/7/2372"
            image="/images/research/ECUSA_news2.png"
          />
          <Article
            title="Influence of Maternal Age and Gestational Age on Breast Milk Antioxidants During the First Month of Lactation"
            abstract="Breast milk antioxidants are linked to gestational age providing higher levels to infants with lower maturation; maternal ageing has a negative influence on melatonin."
            link="https://www.mdpi.com/2072-6643/12/9/2569"
          />
          <Article
            title="Multidimensional Approach to Assess Nutrition and Lifestyle in Breastfeeding Women during the First Month of Lactation"
            abstract="During the 1st month postpartum, breastfeeding women exhibited nutritional imbalances and poor physical activity negatively influencing anthropometric parameters."
            link="https://www.mdpi.com/2072-6643/13/6/1766"
            image="/images/research/nutrients_1.png"
          />
          <Article
            title="Healthy Habits and Emotional Balance in Women during the Postpartum Period: Differences between Term and Preterm Delivery"
            abstract="Healthcare professional counseling is essential during the breastfeeding period, particularly in vulnerable mothers with preterm delivery."
            link="https://www.mdpi.com/2227-9067/8/10/937"
          />
          <Article
            title="Association between Maternal Postpartum Depression, Stress, Optimism, and Breastfeeding Pattern in the First Six Months"
            abstract="In the 3rd month of breastfeeding, women with mixed breastfeeding exhibited higher stress and depression compared to those with exclusively breastfeeding. Evaluation of maternal psychological concerns and providing support to lactating mothers may help improving breastfeeding adherence."
            link="https://www.mdpi.com/1660-4601/17/19/7153"
            image="/images/research/IJERPH_1.png"
          />
        </Accordion>
        <Accordion title="Nutrition During Neonatal Period">
          <Article
            title="Maltodextrin-induced intestinal injury in a neonatal mouse model"
            abstract="This model allows for further interrogation of the effects of nutrients on pathogenic factors leading to intestinal injury in preterm infants."
            link="https://journals.biologists.com/dmm/article/13/8/dmm044776/225253/Maltodextrin-induced-intestinal-injury-in-a"
          />
          <Article
            title="Acetaminophen and Xenobiotic Metabolites in Human Milk and the Development of Bronchopulmonary Dysplasia and Retinopathy of Prematurity in a Cohort of Extremely Preterm Infants"
            abstract="In Press."
            link="https://www.jpeds.com/article/S0022-3476(22)00056-7/fulltext"
          />
          <Article
            title="Parenteral Fish-Oil Containing Lipid Emulsions Limit Initial Lipopolysaccharide-Induced Host Immune Responses in Preterm Pigs"
            abstract="Host priming with soybean oil in the early postnatal period preserves a higher ARA:DHA ratio and the ability to acutely respond to an external stimulus. In contrast, fish-oil containing lipid emulsions increase DHA, exacerbate a deficit in ARA, and limit the initial LPS-induced inflammatory responses in preterm pigs."
            link="https://www.mdpi.com/2072-6643/13/1/205"
            image="/images/research/nutrients_2.png"
          />
          <Article
            title="Plasma Oxidative Status in Preterm Infants Receiving LCPUFA Supplementation: A Pilot Study"
            abstract="ARA:DHA supplementation in preterm neonates resulted in an improvement in antioxidant to oxidant balance and a decrease in early fatty acid precursors of the n-6 relative to the n-3 pathway. These effects may reduce oxidative stress and inflammation."
            link="https://www.mdpi.com/2072-6643/12/1/122"
          />
        </Accordion>
        <Accordion title="Models to Explore Cardiovascular Health">
          <Article
            title="Beneficial Effect of Bariatric Surgery on Abnormal MMP-9 and AMPK Activities: Potential Markers of Obesity-Related CV Risk"
            abstract="Bariatric surgery has a beneficial effect on abnormal MMP-9, LDH and AMPK activities that might be associated with the development of arterial stiffness in obese patients. They could constitute biomarkers of cardiovascular risk in morbid obesity."
            link="https://www.frontiersin.org/articles/10.3389/fphys.2019.00553/full"
          />
          <Article
            title="Finerenone Attenuates Endothelial Dysfunction and Albuminuria in a Chronic Kidney Disease Model by a Reduction in Oxidative Stress"
            abstract="Finerenone improves endothelial dysfunction through an enhancement in NO bioavailability and a decrease in superoxide anion levels due to an upregulation in SOD activity. This is associated with an increase in renal SOD activity and a reduction of albuminuria."
            link="https://www.frontiersin.org/articles/10.3389/fphar.2018.01131/full"
            image="/images/research/finerenona.jpeg"
          />
        </Accordion>
        <Accordion title="Reviews">
          <Article
            title="Implication of Oxidative Stress in Fetal Programming of Cardiovascular Disease"
            abstract="This review summarize the alterations in oxidative balance in fetal stress factors covering: the evidence from human studies of low birth weight, and the specific redox alterations in cardiovascular control organs induced by exposure to stress factors."
            link="https://www.frontiersin.org/articles/10.3389/fphys.2018.00602/full"
            image="/images/research/review_frontiers_in_phys.jpeg"
          />
          <Article
            title="A Review of Bioactive Factors in Human Breastmilk: A Focus on Prematurity"
            abstract="The aim of the review is to summarize the knowledge regarding bioactive factors present in breastmilk, namely antioxidants, growth factors, adipokines, and cytokines, paying attention to prematurity."
            link="https://www.mdpi.com/2072-6643/11/6/1307"
            image="/images/research/review_nutrients1.webp"
          />
          <Article
            title="Breast Milk Lipids and Fatty Acids in Regulating Neonatal Intestinal Development and Protecting against Intestinal Injury"
            abstract="In this review, we focus on lipids and fatty acids present in breast milk and their impact on neonatal gut development and the risk of disease."
            link="https://www.mdpi.com/2072-6643/12/2/534"
            image="/images/research/review_nutrients2.webp"
          />
          <Article
            title="Specialized Pro-Resolving Lipid Mediators in Neonatal Cardiovascular Physiology and Diseases"
            abstract="In this review, we discuss LCPUFAs metabolism, SPMs, and their effect on cardiovascular health and diseases primarily focusing in neonates."
            link="https://www.mdpi.com/2076-3921/10/6/933"
            image="/images/research/review_antioxidants1.webp"
          />
        </Accordion>
      </Container>
      <Container>
        <h2>Books and Chapters</h2>
        <Feed>
          <Article
            title="Legumes: Nutritional Quality, Processing and Potential Health Benefits"
            link="https://pubs.rsc.org/en/content/ebook/978-1-78801-161-7"
            image="/images/research/cover_legumes.jpeg"
          />
          <Article
            title="Fetal Undernutrition and Oxidative Stress: Influence of Sex and Gender"
            link="https://link.springer.com/referenceworkentry/10.1007%2F978-3-319-55387-0_32"
            image="/images/research/cover_starvation.jpeg"
          />
          <Article
            title="Coffee: Antioxidants in Chronic Diseases"
            link="https://pubs.rsc.org/en/content/chapter/bk9781788014977-00020/978-1-78801-497-7"
            image="/images/research/cover_coffee.jpeg"
          />
        </Feed>
      </Container>
    </Layout>
  );
}
