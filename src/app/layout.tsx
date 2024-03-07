import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "bulma/css/bulma.css";
import "/public/styles/style.css";

import Footer from "./footer";
import Header from "./header";
import { PropsWithChildren } from "react";
import ScrollButton from "../components/scroll-button/scroll-button";

export const metadata = {
  title: "FOSCH Research Group"
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
        <ScrollButton />
      </body>
    </html>
  );
}
