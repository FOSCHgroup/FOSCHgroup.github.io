"use client";

import Avatar from "@/ui/avatar/avatar";
import Chip from "@/components/chip/chip";
import Container from "@/ui/container/container";
import Feed from "@/components/feed/feed";
import Layout from "@/components/layout/layout";
import List from "@/ui/list/list";
import ListItem from "@/ui/list-item/list-item";
import ListItemAvatar from "@/ui/list-item-avatar/list-item-avatar";
import ListItemText from "@/ui/list-item-text/list-item-text";
import Stack from "@/ui/stack/stack";
import Thesis from "@/app/education/thesis";
import Typography from "@/ui/typography/typography";
import researchers from "@/data/researchers.json";
import techniques from "@/data/techniques.json";
import theses from "./theses.json";
import { useState } from "react";

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
        <Typography component="h2">Research Techniques</Typography>
        <List>
          {techniques.map((technique, index) => (
            <ListItem key={index}>
              <ListItemAvatar>
                <Avatar
                  src={technique.image}
                  alt={technique.name}
                  variant="square"
                />
              </ListItemAvatar>
              <ListItemText
                primary={technique.name}
                secondary={technique.description}
              />
            </ListItem>
          ))}
        </List>
      </Container>
      <Container>
        <Typography component="h2">Researchers trained in our group</Typography>
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
        <Typography component="h2">PhD Thesis by the Group</Typography>
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
