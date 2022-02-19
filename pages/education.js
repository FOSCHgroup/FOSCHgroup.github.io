import { useState } from "react";
import Container from "../ui/container/container";
import Layout from "../components/layout/layout";
import Stack from "../ui/stack/stack";
import Chip from "../components/chip/chip";
import theses from "../public/data/theses.json";
import researchers from "../public/data/researchers.json";
import Feed from "../components/feed/feed";
import List from "../ui/list/list";
import ListItem from "../ui/list-item/list-item";
import ListItemText from "../ui/list-item-text/list-item-text";
import Thesis from "../components/thesis/thesis";

export default function EducationPage() {
  const [area, setArea] = useState(null);

  return (
    <Layout title="Postgraduate Educational Programming">
      <Container>
        <h2>Research Techniques</h2>
      </Container>
      <Container>
        <h2>Researchers trained in our group</h2>
        <List>
          {researchers.map((researcher, index) => (
            <ListItem key={index}>
              <ListItemText
                primary={researcher.name}
                secondary={researcher.position}
              >
                <span>{researcher.bio}</span>
              </ListItemText>
            </ListItem>
          ))}
        </List>
      </Container>
      <Container>
        <h2>PhD Thesis by the Group</h2>
        <Stack>
          <Chip area="cial" label="CIAL" onClick={() => setArea("cial")} />
          <Chip
            area="medicine"
            label="Medicine"
            onClick={() => setArea("medicina")}
          />
          <Chip basic label="Clear All" onClick={() => setArea(null)} />
        </Stack>
        <Feed>
          {theses
            .filter((thesis) => !area || thesis.areas.includes(area))
            .map((thesis, index) => (
              <Thesis key={index} thesis={thesis} />
            ))}
        </Feed>
      </Container>
    </Layout>
  );
}
