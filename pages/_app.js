import { useEffect, useState } from "react";
import "../styles/style.css";
import IconButton from "../components/icon-button/icon-button";
import ChevronIcon from "../components/icons/chevron";

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
        icon={<ChevronIcon />}
      />
    </>
  );
}

export default MyApp;
