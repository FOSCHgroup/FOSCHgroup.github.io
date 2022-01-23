import Article from "../components/article/article";
import Container from "../components/container/container";
import Layout from "../components/layout/layout";

export default function AboutPage() {
  return (
    <Layout title="Our Research">
      <Container>
        <h2>Research Topics</h2>
      </Container>
      <Container>
        <h2>Competitive Projects</h2>
      </Container>
      <Container>
        <h2>Industry-transferency Projects</h2>
      </Container>
      <Container>
        <h2>Articles</h2>
        <h3>Related to Gestational Health</h3>
        <Article
          title="Maternal plasma antioxidant status in the first trimester of pregnancy and development of obstetric complications"
          abstract="In early gestation, low antioxidants were associated with development of complications."
          link="https://www.sciencedirect.com/science/article/abs/pii/S0143400416304969?via%3Dihub"
        />
        <Article
          title="First trimester elevations of hematocrit, lipid peroxidation and nitrates in women with twin pregnancies who develop preeclampsia"
          abstract="We showed an association between red blood cells, hematocrit, malondialdehyde, and nitrates with preeclampsia in twin pregnancies."
          link="https://www.sciencedirect.com/science/article/abs/pii/S2210778920301215?via%3Dihub"
        />
        <Article
          title="Maternal Resources, Pregnancy Concerns, and Biological Factors Associated to Birth Weight and Psychological Health"
          abstract="The relevance of psychological health during pregnancy for maternal and neonatal outcome, and to consider it in preventive policies in OBS/GYN."
          link="https://www.mdpi.com/2077-0383/10/4/695"
          image="/imagenes/ECUSA_news1.png"
        />
        <Article
          title="Effects of Arachidonic and Docosohexahenoic Acid Supplementation during Gestation in Rats. Implication of Placental Oxidative Stress"
          abstract="High arachidonic acid during gestation associates with intrauterine growth restriction, through placental oxidative stress, with females being more susceptible."
          link="https://www.mdpi.com/1422-0067/19/12/3863"
          image="/imagenes/IJMS_2.png"
        />
        <Article
          title="Maternal Psychological and Biological Factors Associated to Gestational Complications"
          abstract="High maternal melatonin and life satisfaction could be protective factors against the maternal complications during pregnancy. Low anxiety and cortisol and reduced work–life conflicts could prevent fetal complications."
          link="https://www.mdpi.com/2075-4426/11/3/183"
          image="/imagenes/JPM_1.jpeg"
        />
        <Article
          title="Maternal Antioxidant Status in Early Pregnancy and Development of Fetal Complications in Twin Pregnancies: A Pilot Study"
          abstract="In twin gestations, maternal antioxidants and melatonin could be biomarkers to be included in algorithms to predict fetal growth restriction and preterm labor."
          link="https://www.mdpi.com/2076-3921/9/4/269"
          image="/imagenes/antioxidants_cover.png"
        />
        <Article
          title="Early Association Factors for Depression Symptoms in Pregnancy: A Comparison between Spanish Women Spontaneously Gestation and with Assisted Reproduction Techniques"
          abstract="Women undergoing ART need interventions to reduce anxiety and stressful life events, and to improve resilience, self-esteem, and emotional partner support to prevent depressive symptomatology during early pregnancy."
          link="https://www.mdpi.com/2077-0383/10/23/5672"
          image="/imagenes/ART_twiter.jpeg"
        />
        <h3>Related to Pregnancy Epidemiology</h3>
        <Article
          title="Obstetric Outcomes in the Surviving Fetus after Intrauterine Fetal Death in Bichorionic Twin Gestations"
          abstract="Single intrauterine fetal death in twin gestations is a rare complication that should be monitored and attended by a clinical multidisciplinary team."
          link="https://www.mdpi.com/2227-9067/8/10/927"
        />
        <Article
          title="Women Aged over 40 with Twin Pregnancies Have a Higher Risk of Adverse Obstetrical Outcomes"
          abstract="Over 40 years old are an independent risk factor for complications in twin pregnancies."
          link="https://www.mdpi.com/1660-4601/18/24/13117"
        />
        <Article
          title="Younger Age in Adolescent Pregnancies Is Associated with Higher Risk of Adverse Outcomes"
          abstract="Young adolescents are at risk of complications during pregnancy and labor."
          link="https://www.mdpi.com/1660-4601/18/16/8514"
        />
        <h3>Fetal Progaming of Cardiovascular Disease: Sex differences and Maternal Undernutrition</h3>
        <Article
          title="Role of fetal nutrient restriction and postnatal catch-up growth on structural and mechanical alterations of rat aorta"
          abstract="Fetal undernutrition induces similar aortic structural and mechanical alterations in young male and female rats. Our data argue against an early mechanical cause for the sex differences in hypertension development."
          link="https://physoc.onlinelibrary.wiley.com/doi/10.1113/JP275030"
          image="/imagenes/JPHY_1.jpeg"
        />
        <Article
          title="Male fetal sex is associated with low maternal plasma anti-inflammatory cytokine profile in the first trimester of healthy pregnancies"
          abstract="Women with a male fetus may have a worse capacity to counteract an inflammatory response. They may have better vasodilator capacity, but in the presence of an oxidative environment, a higher nitrosative damage may occur."
          link="https://www.sciencedirect.com/science/article/abs/pii/S1043466620303069?via%3Dihub"
          image="/imagenes/cytokines_1.png"
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
          image="/imagenes/IJMS_1.png"
        />
        <Article
          title="Fetal Undernutrition Induces Resistance Artery Remodeling and Stiffness in Male and Female Rats Independent of Hypertension"
          abstract="Fetal undernutrition induces resistence artery inward eutrophic remodeling and stiffness in both sexes. Resistance artery structural and mechanical alterations can participate in the development of hypertension in aged females."
          link="https://www.mdpi.com/2227-9059/8/10/424"
          image="/imagenes/MRA_1.png"
        />
        <h3>Related to Healthy Habits in Lactation Period: Nutrition and Psychological Stage</h3>
        <Article
          title="Assessment of Adherence to the Healthy Food Pyramid in Pregnant and Lactating Women"
          abstract="Breastfeeding mothers of young age and low socioeconomic/educational level would be the target population to carry out nutritional interventions that improve their adherence to the Healthy Foos Piramyd."
          link="https://www.mdpi.com/2072-6643/13/7/2372"
          image="/imagenes/ECUSA_news2.png"
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
          image="/imagenes/nutrients_1.png"
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
          image="/imagenes/IJERPH_1.png"
        />
      </Container>
      <Container>
        <h2>Reviews</h2>
        <Article
          title="Implication of Oxidative Stress in Fetal Programming of Cardiovascular Disease"
          abstract="This review summarize the alterations in oxidative balance in fetal stress factors covering: the evidence from human studies of low birth weight, and the specific redox alterations in cardiovascular control organs induced by exposure to stress factors."
          link="https://www.frontiersin.org/articles/10.3389/fphys.2018.00602/full"
          image="/imagenes/review_frontiers_in_phys.jpeg"
        />
        <Article
          title="A Review of Bioactive Factors in Human Breastmilk: A Focus on Prematurity"
          abstract="The aim of the review is to summarize the knowledge regarding bioactive factors present in breastmilk, namely antioxidants, growth factors, adipokines, and cytokines, paying attention to prematurity."
          link="https://www.mdpi.com/2072-6643/11/6/1307"
          image="/imagenes/review_nutrients1.webp"
        />
        <Article
          title="Breast Milk Lipids and Fatty Acids in Regulating Neonatal Intestinal Development and Protecting against Intestinal Injury"
          abstract="In this review, we focus on lipids and fatty acids present in breast milk and their impact on neonatal gut development and the risk of disease."
          link="https://www.mdpi.com/2072-6643/12/2/534"
          image="/imagenes/review_nutrients2.webp"
        />
        <Article
          title="Specialized Pro-Resolving Lipid Mediators in Neonatal Cardiovascular Physiology and Diseases"
          abstract="In this review, we discuss LCPUFAs metabolism, SPMs, and their effect on cardiovascular health and diseases primarily focusing in neonates."
          link="https://www.mdpi.com/2076-3921/10/6/933"
          image="/imagenes/review_antioxidants1.webp"
        />
      </Container>
      <Container>
        <h2>Libros y Capítulos</h2>
      </Container>
    </Layout>
  );
}
