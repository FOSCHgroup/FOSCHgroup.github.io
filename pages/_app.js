import { useEffect, useState } from "react";
import "../styles/style.css";
import IconButton from "../components/icon-button/icon-button";
import ChevronUpIcon from "../components/icons/chevron-up";

function MyApp({ Component, pageProps }) {
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
    <>
      <Component {...pageProps} />
      <IconButton
        show={toggleButton}
        onClick={handleScrollButtonClick}
        icon={<ChevronUpIcon />}
      />
    </>
  );
}

export default MyApp;
