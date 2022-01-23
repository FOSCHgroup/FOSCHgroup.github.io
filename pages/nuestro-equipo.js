import Container from "../components/container/container";
import Layout from "../components/layout/layout";
import Perfil from "../components/perfil/perfil";

export default function NuestroEquipoPage() {
  return (
    <Layout titulo="Our Research Team">
      <Container>
        <h2>Principal Investigator</h2>
        <Perfil
          id="silvia"
          imagen="/imagenes/silvia.png"
          alt="Una foto de Silvia M. Arribas"
          titulo="Dra. Silvia M. Arribas Rodríguez"
          link="https://www.uam.es/Medicina/ArribasRodriguezSilvia/1242677452339.htm?pid=1242677452589&%20Silvia"
          bio="lallakskksnndkd"
        />
        <Perfil
          id="maria"
          imagen="/imagenes/maria.jpg"
          alt="Una foto de Maria Angeles Martin"
          titulo="Dra. María Ángeles Martín Cabrejas"
          link="https://www.uam.es/Ciencias/Martin_Cabrejas_Maris-Angeles/1446767769606.htm?language=es&pid=1446765791606&n%20Cabrejas,%20Mar?a%20?ngeles"
        />
        <h2>Profesor@s Honoríficos</h2>
        <Perfil
          id="rosario"
          imagen="/imagenes/charo.jpeg"
          alt="Una foto de M. Rosario López"
          titulo="Dra. María Rosario López Giménez"
          link="https://www.uam.es/ss/Satellite/Medicina/es/1242662070984/1242662116351/persona/detallePDI/Lopez_Gimenez,_M%C2%AA_Rosario.htm"
        />
        <Perfil
          id="angel"
          imagen="/imagenes/avatar.png"
          alt="Una foto de Ángel L. López de Pablo"
          titulo="Dr. Ángel L. López de Pablo León"
          link="https://www.uam.es/Medicina/(en)LopezDePabloAngelLuis/1242691880392.htm?pid=1242677447748&pez%20de%20Pablo,%20?ngel%20Luis"
        />
        <Perfil
          id="carmen"
          imagen="/imagenes/avatar.png"
          alt="Una foto de Maria dek Carmen González"
          titulo="Dra. María del Carmen González"
          link=""
        />
        <h2>Junior Investigators</h2>
        <Perfil
          id="yolanda"
          imagen="/imagenes/yolanda.jpg"
          alt="Una foto de Yolanda Aguilera"
          titulo="Dra. Yolanda Aguilera Gutiérrez"
          link="https://www.uam.es/Ciencias/Yolanda-Aguilera-Guti%C3%A9rrez/1446766152599.htm?language=es&pid=1446765791606&rrez,%20Yolanda"
        />
        <Perfil
          id="ignacio"
          imagen="/imagenes/ignacio.jpg"
          alt="Una foto de Ignacio Monedero"
          titulo="Dr. Ignacio Monedero Cobeta"
          link="https://www.uam.es/Medicina/MonederoCobetaIgnacio/1446774319870.htm?pid=1242663815769&%20Ignacio"
        />
        <Perfil
          id="Vanesa"
          imagen="/imagenes/vanesa.jpg"
          alt="Una foto de Vanesa Benitez"
          titulo="Dra. Vanesa Benitez García"
          link="https://www.uam.es/Ciencias/Ben%C3%ADtez-Garcia_Vanesa/1446767457251.htm?pid=1446766111829&language=es"
        />
        <Perfil
          id="Alicia"
          imagen="/imagenes/alicia.jpg"
          alt="Una foto de Alicia Gil"
          titulo="Dra. Alicia Gil Ramírez"
          link="https://www.uam.es/Ciencias/Gil-Ramirez_Alicia/1446816498069.htm?language=es&pid=1446765791606&rez,%20Alicia"
        />
        <Perfil
          id="David"
          imagen="/imagenes/david.jpg"
          alt="Una foto de David Ramiro"
          titulo="Dr. David Ramiro Cortijo"
          link="https://www.uam.es/Medicina/RamiroCortijoDavid/1446825270432.htm?language=es&pid=1242663815769&title=Ramiro%20Cortijo%20David"
        />
        <Perfil
          id="Pilar"
          imagen="/imagenes/pilar.jpg"
          alt="Una foto de Pilar Rodríguez"
          titulo="Dra. Pilar Rodríguez Rodríguez"
          link="https://uam.es/Medicina/RodriguezRodriguezPilar/1242691508065.htm?language=es&pid=1242664265346&title=Rodr?guez%20Rodr?guez%20Pilar"
        />
        <h2>Postdoctoral Researchers</h2>
        <Perfil
          id="andrea"
          imagen="/imagenes/andrea.jpg"
          alt="Una foto de Andrea Gila"
          titulo="Dra. Andrea Gila Díaz"
          link="https://www.researchgate.net/profile/Andrea-Gila-Diaz"
        />
        <Perfil
          id="miguel"
          imagen="/imagenes/miguel.png"
          alt="Una foto de Miguel Rebollo"
          titulo="Dr. Miguel Rebollo Hernánz"
          link="https://scholar.google.com/citations?user=2twRnqMAAAAJ"
        />
        <h2>PhD Students</h2>
        <Perfil
          id="silvia-cañas"
          imagen="/imagenes/canas.jpg"
          alt="Una foto de Silvia Cañas"
          titulo="Silvia Cañas Rodríguez"
          link="https://www.uam.es/Ciencias/Ca%C3%B1as-Rodr%C3%ADguez,-Silvia/1446805074232.htm?language=es&pid=1446765791620&as%20Rodr?guez,%20Silvia"
        />
        <Perfil
          id="cheyenne"
          imagen="/imagenes/cheyenne.jpg"
          alt="Una foto de Cheyenne Braojos"
          titulo="Cheyenne Braojos Molero"
          link="https://www.linkedin.com/in/cheyennebma/"
        />
        <Perfil
          id="santiago"
          imagen="/imagenes/avatar.png"
          alt="Una foto de Santiago Ruvira"
          titulo="Santiago Ruvira"
        />
      </Container>
    </Layout>
  );
}
