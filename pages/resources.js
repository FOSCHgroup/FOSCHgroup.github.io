import Container from "../ui/container/container";
import Layout from "../components/layout/layout";
import Typography from "../ui/typography/typography";

export default function ResourcesPage() {
  return (
    <Layout title="Tools & Resources">
      <Container>
        <Typography component="h2">Contact us</Typography>
        <Typography>
          If you want to be part of our group, please write us by email below
          and tell us about you and your proposal. It would be a pleasure to
          meet you!
        </Typography>
      </Container>
      <Container>
        <Typography component="h2">Short & Long Research Stays</Typography>
      </Container>
    </Layout>
  );
}
