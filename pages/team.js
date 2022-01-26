import Container from "../components/container/container";
import Layout from "../components/layout/layout";
import Profile from "../components/profile/profile";
import Accordion from "../components/accordion/accordion";

export default function NuestroEquipoPage() {
  return (
    <Layout title="Faculty and Researchers">
      <Container>
        <h2>Principal Investigators</h2>
        <table>
          <tbody>
            <tr>
              <td>
                <Profile
                  id="silvia"
                  image="/images/profiles/silvia.png"
                  alt="Una foto de Silvia M. Arribas"
                  title="Dra. Silvia M. Arribas Rodríguez"
                  link="https://www.uam.es/Medicina/ArribasRodriguezSilvia/1242677452339.htm?pid=1242677452589&%20Silvia"
                  position="Head of area: Oxidavive Stress, Fetal Programming and Cardiometabolic Health."
                  bio="PhD in Biomolecular Sciences by Universidad Autónoma de Madrid. Her research was focused on the fetal programming of the cardiovascular disease. She has extensive expertis in the oxidative stress pathways and their implication to physio-pathology balance. She was head of Physiology Department where is Professor of human physiology."
                />
              </td>
              <td>
                <Profile
                  id="maria"
                  image="/images/profiles/maria.jpg"
                  alt="Una foto de Maria Angeles Martin"
                  title="Dra. María Ángeles Martín Cabrejas"
                  link="https://www.uam.es/Ciencias/Martin_Cabrejas_Maris-Angeles/1446767769606.htm?language=es&pid=1446765791606&n%20Cabrejas,%20Mar?a%20?ngeles"
                  position="Head of area: Food Technology and New Ingredient Development."
                  bio="PhD in Chemical Sciences by Universidad Autónoma de Madrid. An important part of her research was dedicated to search the revalorization of agri-food by-products as strategy to obtain new ingredients. She has gained broad experience in the characterization of plant-derived waste products and their conversion into food ingredients. She is Full Professor receiving additional award of 5th Plan for Scientific Research and Technological Innovation."
                />
              </td>
            </tr>
          </tbody>
        </table>
      </Container>
      <Container>
        <h2>Junior Investigators</h2>
        <table>
          <tbody>
            <tr>
              <td>
                <Profile
                  id="ignacio"
                  image="/images/profiles/ignacio.jpg"
                  alt="Una foto de Ignacio Monedero"
                  title="Dr. Ignacio Monedero Cobeta"
                  link="https://www.uam.es/Medicina/MonederoCobetaIgnacio/1446774319870.htm?pid=1242663815769&%20Ignacio"
                  position="Leader of Genomic Technology"
                  bio="PhD in Molecular Biology by Universidad Autónoma de Madrid. He is a specialist in developmental biology and its molecular factors controlling neuronal division. He studies the control of proliferation of the nervous system and its effect on memory. Currently, he is an Associate Professor of Physiology of the Faculty of Medicine of the Universidad Autónoma de Madrid"
                />
              </td>
              <td>
                <Profile
                  id="yolanda"
                  image="/images/profiles/yolanda.jpg"
                  alt="Una foto de Yolanda Aguilera"
                  title="Dra. Yolanda Aguilera Gutiérrez"
                  link="https://www.uam.es/Ciencias/Yolanda-Aguilera-Guti%C3%A9rrez/1446766152599.htm?language=es&pid=1446765791606&rrez,%20Yolanda"
                  position="Coordinator of New Ingredient Development unit."
                  bio="PhD in Food Science and Technology by Universidad Autónoma de Madrid. Her research focuses on insects for human consumption and their effect on health due to their antioxidant compounds. At present, she is an Associate Professor in the agricultural chemistry unit of the Faculty of Sciences of the Universidad Autonoma de Madrid."
                />
              </td>
            </tr>
            <tr>
              <td>
                <Profile
                  id="David"
                  image="/images/profiles/david.jpg"
                  alt="Una foto de David Ramiro"
                  title="Dr. David Ramiro Cortijo"
                  link="https://www.uam.es/Medicina/RamiroCortijoDavid/1446825270432.htm?language=es&pid=1242663815769&title=Ramiro%20Cortijo%20David"
                  position="Coordinator of Pregnancy and Lactation unit."
                />
              </td>
              <td>
                <Profile
                  id="Vanesa"
                  image="/images/profiles/vanesa.jpg"
                  alt="Una foto de Vanesa Benitez"
                  title="Dra. Vanesa Benitez García"
                  link="https://www.uam.es/Ciencias/Ben%C3%ADtez-Garcia_Vanesa/1446767457251.htm?pid=1446766111829&language=es"
                  position="Coordinator of Food Technology unit."
                />
              </td>
            </tr>
            <tr>
              <td>
                <Profile
                  id="Pilar"
                  image="/images/profiles/pilar.jpg"
                  alt="Una foto de Pilar Rodríguez"
                  title="Dra. Pilar Rodríguez Rodríguez"
                  link="https://uam.es/Medicina/RodriguezRodriguezPilar/1242691508065.htm?language=es&pid=1242664265346&title=Rodr?guez%20Rodr?guez%20Pilar"
                  position="Coordinator of Fetal Programming unit and Animal models."
                />
              </td>
              <td>
                <Profile
                  id="Alicia"
                  image="/images/profiles/alicia.jpg"
                  alt="Una foto de Alicia Gil"
                  title="Dra. Alicia Gil Ramírez"
                  link="https://www.uam.es/Ciencias/Gil-Ramirez_Alicia/1446816498069.htm?language=es&pid=1446765791606&rez,%20Alicia"
                />
              </td>
            </tr>
          </tbody>
        </table>
      </Container>
      <Container>
        <h2>Postdoctoral Researchers</h2>
        <table>
          <tbody>
            <tr>
              <td>
                <Profile
                  id="andrea"
                  image="/images/profiles/andrea.jpg"
                  alt="Una foto de Andrea Gila"
                  title="Dra. Andrea Gila Díaz"
                  link="https://www.researchgate.net/profile/Andrea-Gila-Diaz"
                />
              </td>
              <td>
                <Profile
                  id="miguel"
                  image="/images/profiles/miguel.png"
                  alt="Una foto de Miguel Rebollo"
                  title="Dr. Miguel Rebollo Hernánz"
                  link="https://scholar.google.com/citations?user=2twRnqMAAAAJ"
                />
              </td>
            </tr>
          </tbody>
        </table>
      </Container>
      <Container>
        <h2>PhD Students</h2>
        <table>
          <tbody>
            <tr>
              <td>
                <Profile
                  id="santiago"
                  alt="Una foto de Santiago Ruvira"
                  title="Santiago Ruvira"
                  image="/images/profiles/avatar.png"
                  link="https://www.google.com/"
                />
              </td>
              <td>
                <Profile
                  id="silvia-cañas"
                  image="/images/profiles/canas.jpg"
                  alt="Una foto de Silvia Cañas"
                  title="Silvia Cañas Rodríguez"
                  link="https://www.uam.es/Ciencias/Ca%C3%B1as-Rodr%C3%ADguez,-Silvia/1446805074232.htm?language=es&pid=1446765791620&as%20Rodr?guez,%20Silvia"
                />
              </td>
            </tr>
            <tr>
              <td></td>
              <td>
                <Profile
                  id="cheyenne"
                  image="/images/profiles/cheyenne.jpg"
                  alt="Una foto de Cheyenne Braojos"
                  title="Cheyenne Braojos Molero"
                  link="https://www.linkedin.com/in/cheyennebma/"
                />
              </td>
            </tr>
          </tbody>
        </table>
      </Container>
      <Container>
        <Accordion title="Emeritus Professors">
          <Profile
            id="rosario"
            image="/images/profiles/charo.jpeg"
            alt="Una foto de M. Rosario López"
            title="Dra. María Rosario López Giménez"
          />
          <Profile
            id="angel"
            image="/images/profiles/angel_luis.jpeg"
            alt="Una foto de Ángel L. López de Pablo"
            title="Dr. Ángel L. López de Pablo León"
          />
          <Profile
            id="carmen"
            image="/images/profiles/mari_carmen.jpg"
            alt="Una foto de Maria dek Carmen González"
            title="Dra. María del Carmen González"
          />
        </Accordion>
      </Container>
      <Container>
        <Accordion title="External Colaborators and Advisory Board">
          <Profile
            title="Dra. Begoña Quintana Villamandos"
            bio="Cardiac surgery unit of Anesthesiology and Resuscitation Service at Hospital General Universitario Gregorio Marañón (Madrid, Spain)"
          />
          <Profile
            title="Dra. Maria de la Calle Fernández-Miranda"
            bio="High-risk unit of OBS/GYN Service at Hospital Universitario La Paz (Madrid, Spain)"
          />
          <Profile
            title="Dr. Miguel Sáen de Pipaón Marcos"
            bio="Neonatal Intensive Care unit of Neonatology Service at Hospital Universitario La Paz (Madrid, Spain)"
          />
          <Profile
            title="Dr. Jose Maria"
            bio="Cardiac surgery unit of Anesthesiology and Resuscitation Service at Hospital General Universitario Gregorio Marañón (Madrid, Spain)"
          />
          <Profile
            title="Dra. Gloria Hernández Carrillo"
            bio="Neonatology Service at Hospital Clínico San Carlos (Madrid, Spain)"
          />
          <Profile
            title="Dra. Eva Garrosa Hernández"
            bio="Department of psychology-biology and health psychology of Faculty of Psychology of Universidad Autónoma de Madrid (Spain)"
          />
          <Profile
            title="Dra. María de la Fé Rodriguez Muñoz"
            bio="Department of Personality Psychology, Treatment and Assesment of Faculty of Psychology of Universidad Nacional de Educación a Distancia (Spain)"
          />
          <Profile
            title="Dra. Marta Gil Ortega"
            bio="Neonatology Service at Hospital Clínico San Carlos (Madrid, Spain)"
          />
          <Profile
            title="Dra. Beatriz Somoza"
            bio="Neonatology Service at Hospital Clínico San Carlos (Madrid, Spain)"
          />
          <Profile
            title="Dra. Perla Y. Gutierrez Arzapalo"
            bio="Neonatology Service at Hospital Clínico San Carlos (Madrid, Spain)"
          />
        </Accordion>
      </Container>
    </Layout>
  );
}
