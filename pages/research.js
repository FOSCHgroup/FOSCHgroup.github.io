import Accordion from "../components/accordion/accordion";
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
        <Accordion title="General Nutrition">
          <Article
            title="Development and Validation of a Questionnaire to Assess Adherence to the Healthy Food Pyramid in Spanish Adults"
            abstract="AP-Q is a questionnaire to assess healthy food pyramid adherence, easy to complete, cost-effective, timesaving and has the competency to assess, besides diet, several features affecting health status."
            link="https://www.mdpi.com/2072-6643/12/6/1656"
          />
        </Accordion>
        <Accordion title="Food Technology and Developmental of New Ingredients">
          <Article
            title="Bioavailability of Melatonin from Lentil Sprouts and Its Role in the Plasmatic Antioxidant Status in Rats"
            abstract="We investigated the bioavailability of melatonin from lentil sprouts and its role in plasmatic antioxidant status. Their intake could increase melatonin plasmatic concentration and attenuate plasmatic oxidative stress."
            link="https://www.mdpi.com/2304-8158/9/3/330"
            image="/images/research/foods_1.png"
          />
          <Article
            title="Teas and herbal infusions as sources of melatonin and other bioactive non-nutrient components"
            abstract="The teas and herbal infusions could be consided as suitable drinks herein validated for their bioactive compounds that may act as antioxidants and non-protein inhibitors of digestive enzymes."
            link="https://www.sciencedirect.com/science/article/abs/pii/S0023643817307697"
          />
          <Article
            title="Phenolic compounds from coffee by-products modulate adipogenesis-related inflammation, mitochondrial dysfunction, and insulin resistance in adipocytes, via insulin/PI3K/AKT signaling pathways"
            abstract="Coffee silverskin and husk are beneficial in reducing adipogenesis and inflammation-related disorders."
            link="https://www.sciencedirect.com/science/article/pii/S0278691519304612"
            image="/images/research/CSE_1.jpg"
          />
          <Article
            title="Extraction of phenolic compounds from cocoa shell: Modeling using response surface methodology and artificial neural networks"
            abstract="Green extraction of phenolic compounds from the cocoa shell was modeled and optimized."
            link="https://www.sciencedirect.com/science/article/pii/S1383586621004913"
            image="/images/research/foods_2.jpg"
          />
          <Article
            title="Black bean coats: New source of anthocyanins stabilized by β-cyclodextrin copigmentation in a sport beverage"
            abstract="These black bean coat aqueous extracts and powders might represent natural alternatives to synthetic colorants, ecologically extracted, and with a high antioxidant potential."
            link="https://www.sciencedirect.com/science/article/abs/pii/S0308814616309153"
          />
          <Article
            title="Coffee parchment as a new dietary fiber ingredient: Functional and physiological characterization"
            abstract="Milling is a strategy for developing fiber-rich coffee parchment-based ingredients. Coffee parchment shows promising hypoglycemic and hypolipidemic capacities."
            link="https://www.sciencedirect.com/science/article/abs/pii/S096399691930225X"
            image="/images/research/CSE_2.jpg"
          />
          <Article
            title="Impact of Melatonin Enrichment during Germination of Legumes on Bioactive Compounds and Antioxidant Activity"
            abstract="The melatonin-enriched foods exhibited potent free radical scavenger and antioxidant functions that may be used as a nutritional strategy to alleviate chronic and age-related diseases."
            link="https://pubs.acs.org/doi/abs/10.1021/acs.jafc.5b03128"
          />
          <Article
            title="Revalorization of Coffee Husk: Modeling and Optimizing the Green Sustainable Extraction of Phenolic Compounds"
            abstract="The phenolic aqueous extracts from the coffee husk could be used as sustainable food ingredients and nutraceutical products."
            link="https://www.mdpi.com/2304-8158/10/3/653"
            image="/images/research/CSE_5.png"
          />
          <Article
            title="Relationship of the Phytochemicals from Coffee and Cocoa By-Products with their Potential to Modulate Biomarkers of Metabolic Syndrome In Vitro"
            abstract="We identified the phytochemicals from coffee and cocoa by-products and offered new insights into their associations with biomarkers of inflammation, oxidative stress, adipogenesis, and insulin resistance in vitro."
            link="https://www.mdpi.com/2076-3921/8/8/279"
            image="/images/research/CSE_3.png"
          />
          <Article
            title="Cocoa Shell Aqueous Phenolic Extract Preserves Mitochondrial Function and Insulin Sensitivity by Attenuating Inflammation between Macrophages and Adipocytes In Vitro"
            abstract="Cocoa shell phenolics promote a beige phenotype in adipocytes. Macrophages-adipocytes inflammatory interaction is reduced preventing mitochondrial dysfunction and insulin resistance."
            link="https://onlinelibrary.wiley.com/doi/abs/10.1002/mnfr.201801413"
          />
          <Article
            title="Inhibition of the Maillard Reaction by Phytochemicals Composing an Aqueous Coffee Silverskin Extract via a Mixed Mechanism of Action"
            abstract="Isoflavones and melatonin may contribute to the antiglycative/antiglycoxidative properties associated with coffee silverskin."
            link="https://www.mdpi.com/2304-8158/8/10/438"
            image="/images/research/CSE_4.webp"
          />
        </Accordion>
        <Accordion title="Related to Gestational Health">
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
            image="/images/research/ECUSA_news1.png"
          />
          <Article
            title="Effects of Arachidonic and Docosohexahenoic Acid Supplementation during Gestation in Rats. Implication of Placental Oxidative Stress"
            abstract="High arachidonic acid during gestation associates with intrauterine growth restriction, through placental oxidative stress, with females being more susceptible."
            link="https://www.mdpi.com/1422-0067/19/12/3863"
            image="/images/research/IJMS_2.png"
          />
          <Article
            title="Maternal Psychological and Biological Factors Associated to Gestational Complications"
            abstract="High maternal melatonin and life satisfaction could be protective factors against the maternal complications during pregnancy. Low anxiety and cortisol and reduced work–life conflicts could prevent fetal complications."
            link="https://www.mdpi.com/2075-4426/11/3/183"
            image="/images/research/JPM_1.jpeg"
          />
          <Article
            title="Maternal Antioxidant Status in Early Pregnancy and Development of Fetal Complications in Twin Pregnancies: A Pilot Study"
            abstract="In twin gestations, maternal antioxidants and melatonin could be biomarkers to be included in algorithms to predict fetal growth restriction and preterm labor."
            link="https://www.mdpi.com/2076-3921/9/4/269"
            image="/images/research/antioxidants_cover.png"
          />
          <Article
            title="Early Association Factors for Depression Symptoms in Pregnancy: A Comparison between Spanish Women Spontaneously Gestation and with Assisted Reproduction Techniques"
            abstract="Women undergoing ART need interventions to reduce anxiety and stressful life events, and to improve resilience, self-esteem, and emotional partner support to prevent depressive symptomatology during early pregnancy."
            link="https://www.mdpi.com/2077-0383/10/23/5672"
            image="/images/research/ART_twiter.jpeg"
          />
        </Accordion>
        <Accordion title="Related to Pregnancy Epidemiology">
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
        </Accordion>
        <Accordion title="Fetal Progaming of Cardiovascular Disease: Sex differences and Maternal Undernutrition">
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
        <Accordion title="Related to Healthy Habits in Lactation Period: Nutrition and Psychological Stage">
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
      </Container>
    </Layout>
  );
}
