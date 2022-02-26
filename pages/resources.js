import Container from "../ui/container/container";
import Layout from "../components/layout/layout";
import Typography from "../ui/typography/typography";
import Link from "../ui/link/link";

export default function ResourcesPage() {
  return (
    <Layout title="Tools & Resources">
      <Container>
        <Typography component="h2">
          How to Get Around the Research Centers
        </Typography>
        <Typography>
          The Universidad Autónoma de Madrid (UAM) is divided into two campuses,
          Cantoblanco and the campus of Medicine. You can consult the plans and
          services offered by this university in the following link.
        </Typography>
        <Typography>
          <Link href="https://www.uam.es/uam/vida-uam/campus">
            https://www.uam.es/uam/vida-uam/campus
          </Link>
        </Typography>
        <Typography>
          You can access the Cantoblanco campus by train and get off at the
          "Cantoblanco" station on the C-4 line. Or by bus with lines 714, 827,
          827A and 828. Lines 711, 712, 713, 713, 716, 717, 721, 722, 724, 725,
          726, and 876 stop near the campus. If you want to go to the Medicine
          campus, you can take bus lines 67, 132, 134 and 135, or Metro, getting
          off at the "Begoña" stop on Line 10 (dark blue). Interurban lines 155,
          157, 161, 181, 181, 182, 183, 184, 184, 190, 191, 193, 194, 195, 196,
          197, 199, 712, 713, 714, 716, 721, 722, 724, 725 and 726 also reach
          this campus. We leave you more information on the web:
        </Typography>
        <Typography>
          <Link href="https://www.uam.es/uam/ecocampus/movilidad">
            https://www.uam.es/uam/ecocampus/movilidad
          </Link>
        </Typography>
        <Typography>
          The food research center (CIAL-UAM-CSIC) is located on Cantoblanco.
          You can find more information in the following link.
        </Typography>
        <Typography>
          <Link href="https://www.cial.uam-csic.es/">
            https://www.cial.uam-csic.es/
          </Link>
        </Typography>
      </Container>
      <Container>
        <Typography component="h2">Get to Know Madrid</Typography>
        <Typography>
          Madrid, as the capital of Spain, is a very cosmopolitan city that
          offers a multitude of cultural resources and activities. In the
          following link you can find a wide variety of cultural offers and
          places to visit.
        </Typography>
        <Typography>
          <Link href="https://www.madrid.es/portales/munimadrid/es/Inicio/Cultura-ocio-y-deporte/?vgnextfmt=default&vgnextchannel=7911f073808fe410VgnVCM2000000c205a0aRCRD&vgnextoid=7911f073808fe410VgnVCM2000000c205a0aRCRD">
            https://www.madrid.es/portales/munimadrid/es/Inicio/Cultura-ocio-y-deporte/?vgnextfmt=default&vgnextchannel=7911f073808fe410VgnVCM2000000c205a0aRCRD&vgnextoid=7911f073808fe410VgnVCM2000000c205a0aRCRD
          </Link>
        </Typography>
        <Typography>
          Also, its communication and transportation is enviable, having an
          extensive network of metro and buses 24/7. You can consult the maps,
          schedules and prices in the following links.
        </Typography>
        <Typography>
          <Link href="https://www.metromadrid.es/es/viaja-en-metro/plano-de-metro-de-madrid">
            https://www.metromadrid.es/es/viaja-en-metro/plano-de-metro-de-madrid
          </Link>
        </Typography>
        <Typography>
          <Link href="https://www.emtmadrid.es/Index.aspx?lang=en-GB">
            https://www.emtmadrid.es/Index.aspx?lang=en-GB
          </Link>
        </Typography>
        <Typography>
          Madrid is a city located in the center of the Spain and makes it
          perfect to move from North to South and East to West getting to know
          new cities and Spanish cultures. In the following link you can access
          atobuses or train network that allow you to know other places.
        </Typography>
        <Typography>
          <Link href="https://www.renfe.com/es/es?cid=generica&c=sem&fuente=google&campana=generica&fecha=2022&ubicacion=google&formato=link&elemento_clic=link&s_kwcid=AL!11457!3!354608896043!b!!g!!renfe&gclid=Cj0KCQiAmeKQBhDvARIsAHJ7mF77V1D41r0J2MI4XGT2mGxP19vHnIXQ-mWCcRi3NtylYcJRnt3yTYoaAskCEALw_wcB">
            https://www.renfe.com/es/es?cid=generica&c=sem&fuente=google&campana=generica&fecha=2022&ubicacion=google&formato=link&elemento_clic=link&s_kwcid=AL!11457!3!354608896043!b!!g!!renfe&gclid=Cj0KCQiAmeKQBhDvARIsAHJ7mF77V1D41r0J2MI4XGT2mGxP19vHnIXQ-mWCcRi3NtylYcJRnt3yTYoaAskCEALw_wcB
          </Link>
        </Typography>
      </Container>
      <Container>
        <Typography component="h2">Contact Us</Typography>
        <Typography>
          If you want to be part of our group, please write us by email below
          and tell us about you and your proposal. It would be a pleasure to
          meet you! In addition, if you would like to make a financial
          contribution to support our research please do not hesitate to contact
          us.
        </Typography>
      </Container>
      <Container>
        <Typography component="h2">Short & Long Research Stays</Typography>
        <Typography>
          Are you planning to do a research stay? Do you want to learn new
          techniques or establish collaborations? At FOSCH research group you
          can do a short-research stay (1 to 3 months) or a long-research stay
          (more than 3 months) with us. Check the collaboration agreements
          offered by your institution and contact us with your proposal. We are
          waiting for you!
        </Typography>
      </Container>
    </Layout>
  );
}
