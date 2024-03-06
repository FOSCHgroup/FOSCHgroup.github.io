"use client";

import { useEffect, useState } from "react";

import ChevronUpIcon from "../icons/chevron-up";
import IconButton from "../icon-button/icon-button";

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

  return (
    <IconButton
      show={toggleButton}
      onClick={handleScrollButtonClick}
      icon={<ChevronUpIcon />}
    />
  );
}
