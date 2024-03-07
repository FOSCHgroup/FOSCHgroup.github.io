"use client";

import { useEffect, useState } from "react";

import ChevronUpIcon from "../icons/chevron-up";

export default function ScrollButton() {
  const [toggleButton, setToggleButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (document.documentElement.scrollTop > 20) {
        setToggleButton(true);
      } else {
        setToggleButton(false);
      }
    });
  }, []);

  const handleScrollButtonClick = () => {
    window.scrollBy({
      top: -document.documentElement.scrollTop,
      behavior: "smooth"
    });
  };

  if (!toggleButton) {
    return null;
  }

  return (
    <button
      className="button is-large is-info is-rounded"
      onClick={handleScrollButtonClick}
      style={{
        position: "fixed",
        right: "3em",
        bottom: "3em",
        width: "64px",
        height: "64px"
      }}
    >
      <span className="icon is-medium">
        <ChevronUpIcon />
      </span>
    </button>
  );
}
