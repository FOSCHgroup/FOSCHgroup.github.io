"use client";

import Thesis, { IThesis } from "./thesis";

import Chip from "../../components/chip/chip";
import Feed from "../../components/feed/feed";
import Stack from "@/ui/stack/stack";
import theses from "./theses.json";
import { useState } from "react";

type Area = "cial" | "medicine" | "both";

export default function Theses() {
  const [areas, setAreas] = useState<Area[] | null>(null);
  const getTheses = (theses: IThesis[], areas: Area[] | null) => {
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
    <>
      <Stack>
        <Chip area="cial" label="CIAL" onClick={() => setAreas(["cial"])} />
        <Chip
          area="medicine"
          label="Medicine"
          onClick={() => setAreas(["medicine"])}
        />
        <Chip
          area="both"
          label="Both"
          onClick={() => setAreas(["medicine", "cial"])}
        />
        <Chip basic label="Clear All" onClick={() => setAreas(null)} />
      </Stack>
      <Feed>
        {getTheses(theses, areas).map((thesis, index) => (
          <Thesis key={index} thesis={thesis} />
        ))}
      </Feed>
    </>
  );
}
