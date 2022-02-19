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
  const [areas, setAreas] = useState(null);
  const getTheses = (theses, areas) => {
    if (!areas) {
      return theses;
    }
    const sortedAreas = areas.sort();
    return theses.filter((thesis) => {
      const sortedThesisAreas = thesis.areas.sort();
      return (
        thesis.areas.length === areas.length &&
        sortedThesisAreas.every(
          (sortedThesisArea, index) => sortedThesisArea === sortedAreas[index]
        )
      );
    });
  };

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
          <Chip area="cial" label="CIAL" onClick={() => setAreas(["cial"])} />
          <Chip
            area="medicine"
            label="Medicine"
            onClick={() => setAreas(["medicina"])}
          />
          <Chip
            area="both"
            label="Both"
            onClick={() => setAreas(["medicina", "cial"])}
          />
          <Chip basic label="Clear All" onClick={() => setAreas(null)} />
        </Stack>
        <Feed>
          {getTheses(theses, areas).map((thesis, index) => (
            <Thesis key={index} thesis={thesis} />
          ))}
        </Feed>
      </Container>
    </Layout>
  );
}
