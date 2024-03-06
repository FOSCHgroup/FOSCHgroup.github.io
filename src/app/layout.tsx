import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "/public/styles/style.css";
import ScrollButton from "../components/scroll-button/scroll-button";

export const metadata = {
  title: "FOSCH Research Group"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
        <ScrollButton />
      </body>
    </html>
  );
}
