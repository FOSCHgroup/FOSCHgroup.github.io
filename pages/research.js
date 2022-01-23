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
        <h2>Proyectos de Investigación Competitivos</h2>
      </Container>
      <Container>
        <h2>Proyectos con la Industria</h2>
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
          title="Maternal Resources, Pregnancy Concerns, and Biological Factors Associated to Birth Weight and Psychological Health"
          abstract="The relevance of psychological health during pregnancy for maternal and neonatal outcome, and to consider it in preventive policies in OBS/GYN."
          link="https://www.mdpi.com/2077-0383/10/4/695"
          image="/imagenes/ECUSA_news1.png"
        />
        <Article
          title="Maternal Psychological and Biological Factors Associated to Gestational Complications"
          abstract="High maternal melatonin and life satisfaction could be protective factors against the maternal complications during pregnancy. Low anxiety and cortisol and reduced work–life conflicts could prevent fetal complications."
          link="https://www.mdpi.com/2075-4426/11/3/183"
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
        <h3>Related to Lactation Period and Nutrition</h3>
        <Article
          title="Assessment of Adherence to the Healthy Food Pyramid in Pregnant and Lactating Women"
          abstract="Breastfeeding mothers of young age and low socioeconomic/educational level would be the target population to carry out nutritional interventions that improve their adherence to the Healthy Foos Piramyd."
          link="https://www.mdpi.com/2072-6643/13/7/2372"
          image="/imagenes/ECUSA_news2.png"
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
