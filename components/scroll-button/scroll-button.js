"use client";

import { useState, useEffect } from "react";
import IconButton from "../icon-button/icon-button";
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
      behavior: "smooth",
    });
  };

  return (
    <IconButton
      show={toggleButton}
      onClick={handleScrollButtonClick}
      icon={<ChevronUpIcon />}
    />
  );
}
