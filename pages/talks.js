import Container from "../components/container/container";
import Layout from "../components/layout/layout";
import Card from "../components/card/card";

export default function DivulgacionPage() {
  return (
    <Layout title="News & Talks">
      <Container>
        <h2>News in social media</h2>
      </Container>
      <Container>
        <Card
            image="https://www.madrimasd.org/uploads/autumn-1850044_960_720.jpg"
            title="Insufficient nutrition in the fetal stage predisposes to the development of cardiovascular diseases"
            link="https://www.madrimasd.org/notiweb/noticias/una-nutricion-insuficiente-en-etapa-fetal-predispone-desarrollo-enfermedades-cardiovasculares"
          />
      </Container>
      <Container>
        <Card
           image="https://www.madrimasd.org/uploads/noti7_11_12_20.jpg"
           title="Fetal sex affects on inflammatory pathways in the pregnant woman"
           link="https://www.madrimasd.org/notiweb/noticias/sexo-feto-influye-en-los-niveles-citoquinas-inflamatorias-oxido-nitrico-en-embarazada"
          />
      </Container>
      <Container>
        <Card
           image="https://www.bonka.es/themes/custom/bonka/img/donde_viene_cafe_1.jpg"
           title="New beneficial properties discovered in coffee husks"
           link="https://www.alimente.elconfidencial.com/bienestar/2020-11-28/propiedades-antiinflamatorias-cascara-cafe_2282159/"
          />
      </Container>
      <Container>
        <Card
           image="https://www.ecusa.es/wp-content/uploads/2021/07/Foto-para-portada_II.jpg"
           title="Postpartum diet... What do I eat now?"
           link="https://www.ecusa.es/dieta-postparto/"
          />
      </Container>
      <Container>
        <Card
            image="https://d3wo5wojvuv7l.cloudfront.net/t_square_limited_720/images.spreaker.com/original/c5b3351c099a50c669af35390a70f294.jpg"
            title="Nursing and research"
            link="https://www.spreaker.com/user/12083995/episodio-17-la-enfermeria-y-la-investiga"
          />
      </Container>
      <Container>
        <Card
            image="https://www.ecusa.es/wp-content/uploads/2021/02/David-Ramiro-Cortijo-500x500.jpg"
            title="Anti-stress pregnancies: Benefits for mother and baby during pregnancy"
            link="https://www.ecusa.es/embarazos-antiestres-beneficios-para-la-madre-y-el-bebe-durante-la-gestacion/"
          />
      </Container>
      <Container>
        <h2>Contribution to society</h2>
      </Container>
      <Container>
        <Card
           image="https://pbs.twimg.com/media/EIHgPnjX0AEp7EJ?format=jpg&name=small"
           image2="https://pbs.twimg.com/media/EIh26HNWoAIytTX?format=jpg&name=small"
           title="Programming cardiovascular disease: an ontological perspective"
           bio="On October 31, 2019, one of the most interesting Science&Coffee of the UAM was held. Dr. Arribas presented us in -La Casa de las Fieras- (Madrid, Spain) whether cardiovascular diseases can be programmed already in utero."
          />
      </Container>
      <Container>
        <Card
           video="https://www.youtube.com/embed/--TgJgZuwjM"
           title="Conference on the innovations in precision nutrition"
          />
      </Container>
      <Container>
        <Card
           video="https://www.youtube.com/embed/8Ao0FkFun1s"
           title="InnoUAM_BioHealth"
           bio="Biomarkers of oxidative stress for diagnosis. UAM has held InnoUAM_BioHealth, an event in which the latest innovations in diagnosis and therapy of diseases were presented by researchers, as well as by companies related to the subject."
          />
      </Container>
      <Container>
        <Card
           video="https://www.youtube.com/embed/zpwUOiZncT8"
           title="Advanced food technologies"
           bio="Sustainable Functional Ingredients as a use of agri-food by-products. Technology leads to a better food: bioactive ingredients and compounds, new foods and precision nutrition."
          />
      </Container>
      <Container>
        <Card
           video="https://www.youtube.com/embed/hkdPk4pAo40"
           title="Biomarkers of oxidative stress for diagnostics"
           bio="Dr. Arribas will take us into the knowledge of the biomarkers of oxidative stress for the diagnosis of diseases, as well as the study of ingredients with antioxidant capacity to prevent or alleviate some pathologies."
          />
      </Container>
      <Container>
        <Card
           video="https://www.youtube.com/embed/WegaJ8mItFg"
           title="Science for Kids"
           bio="Dr. Ramiro teaches us how to make edible slimes. The result of this video is a class on how to make troll and fairy slimes."
          />
      </Container>
    </Layout>
  );
}
