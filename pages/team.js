import Container from "../components/container/container";
import Layout from "../components/layout/layout";
import Perfil from "../components/profile/profile";

export default function NuestroEquipoPage() {
  return (
    <Layout title="Our Research Team">
      <Container>
        <h2>Principal Investigator</h2>
        <Perfil
          id="silvia"
          image="/imagenes/silvia.png"
          alt="Una foto de Silvia M. Arribas"
          title="Dra. Silvia M. Arribas Rodríguez"
          link="https://www.uam.es/Medicina/ArribasRodriguezSilvia/1242677452339.htm?pid=1242677452589&%20Silvia"
          bio="lallakskksnndkd"
        />
        <Perfil
          id="maria"
          image="/imagenes/maria.jpg"
          alt="Una foto de Maria Angeles Martin"
          title="Dra. María Ángeles Martín Cabrejas"
          link="https://www.uam.es/Ciencias/Martin_Cabrejas_Maris-Angeles/1446767769606.htm?language=es&pid=1446765791606&n%20Cabrejas,%20Mar?a%20?ngeles"
        />
      </Container>
      <Container>
        <h2>Profesor@s Honoríficos</h2>
        <Perfil
          id="rosario"
          image="/imagenes/charo.jpeg"
          alt="Una foto de M. Rosario López"
          title="Dra. María Rosario López Giménez"
          link="https://www.uam.es/ss/Satellite/Medicina/es/1242662070984/1242662116351/persona/detallePDI/Lopez_Gimenez,_M%C2%AA_Rosario.htm"
        />
        <Perfil
          id="angel"
          image="/imagenes/avatar.png"
          alt="Una foto de Ángel L. López de Pablo"
          title="Dr. Ángel L. López de Pablo León"
          link="https://www.uam.es/Medicina/(en)LopezDePabloAngelLuis/1242691880392.htm?pid=1242677447748&pez%20de%20Pablo,%20?ngel%20Luis"
        />
        <Perfil
          id="carmen"
          image="/imagenes/avatar.png"
          alt="Una foto de Maria dek Carmen González"
          title="Dra. María del Carmen González"
          link=""
        />
      </Container>
      <Container>
        <h2>Junior Investigators</h2>
        <Perfil
          id="yolanda"
          image="/imagenes/yolanda.jpg"
          alt="Una foto de Yolanda Aguilera"
          title="Dra. Yolanda Aguilera Gutiérrez"
          link="https://www.uam.es/Ciencias/Yolanda-Aguilera-Guti%C3%A9rrez/1446766152599.htm?language=es&pid=1446765791606&rrez,%20Yolanda"
        />
        <Perfil
          id="ignacio"
          image="/imagenes/ignacio.jpg"
          alt="Una foto de Ignacio Monedero"
          title="Dr. Ignacio Monedero Cobeta"
          link="https://www.uam.es/Medicina/MonederoCobetaIgnacio/1446774319870.htm?pid=1242663815769&%20Ignacio"
        />
        <Perfil
          id="Vanesa"
          image="/imagenes/vanesa.jpg"
          alt="Una foto de Vanesa Benitez"
          title="Dra. Vanesa Benitez García"
          link="https://www.uam.es/Ciencias/Ben%C3%ADtez-Garcia_Vanesa/1446767457251.htm?pid=1446766111829&language=es"
        />
        <Perfil
          id="Alicia"
          image="/imagenes/alicia.jpg"
          alt="Una foto de Alicia Gil"
          title="Dra. Alicia Gil Ramírez"
          link="https://www.uam.es/Ciencias/Gil-Ramirez_Alicia/1446816498069.htm?language=es&pid=1446765791606&rez,%20Alicia"
        />
        <Perfil
          id="David"
          image="/imagenes/david.jpg"
          alt="Una foto de David Ramiro"
          title="Dr. David Ramiro Cortijo"
          link="https://www.uam.es/Medicina/RamiroCortijoDavid/1446825270432.htm?language=es&pid=1242663815769&title=Ramiro%20Cortijo%20David"
        />
        <Perfil
          id="Pilar"
          image="/imagenes/pilar.jpg"
          alt="Una foto de Pilar Rodríguez"
          title="Dra. Pilar Rodríguez Rodríguez"
          link="https://uam.es/Medicina/RodriguezRodriguezPilar/1242691508065.htm?language=es&pid=1242664265346&title=Rodr?guez%20Rodr?guez%20Pilar"
        />
      </Container>
      <Container>
        <h2>Postdoctoral Researchers</h2>
        <Perfil
          id="andrea"
          image="/imagenes/andrea.jpg"
          alt="Una foto de Andrea Gila"
          title="Dra. Andrea Gila Díaz"
          link="https://www.researchgate.net/profile/Andrea-Gila-Diaz"
        />
        <Perfil
          id="miguel"
          image="/imagenes/miguel.png"
          alt="Una foto de Miguel Rebollo"
          title="Dr. Miguel Rebollo Hernánz"
          link="https://scholar.google.com/citations?user=2twRnqMAAAAJ"
        />
      </Container>
      <Container>
        <h2>PhD Students</h2>
        <Perfil
          id="silvia-cañas"
          image="/imagenes/canas.jpg"
          alt="Una foto de Silvia Cañas"
          title="Silvia Cañas Rodríguez"
          link="https://www.uam.es/Ciencias/Ca%C3%B1as-Rodr%C3%ADguez,-Silvia/1446805074232.htm?language=es&pid=1446765791620&as%20Rodr?guez,%20Silvia"
        />
        <Perfil
          id="cheyenne"
          image="/imagenes/cheyenne.jpg"
          alt="Una foto de Cheyenne Braojos"
          title="Cheyenne Braojos Molero"
          link="https://www.linkedin.com/in/cheyennebma/"
        />
        <Perfil
          id="santiago"
          image="/imagenes/avatar.png"
          alt="Una foto de Santiago Ruvira"
          title="Santiago Ruvira"
        />
      </Container>
    </Layout>
  );
}
