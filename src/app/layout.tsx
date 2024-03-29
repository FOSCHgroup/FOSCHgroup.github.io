import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "bulma/css/bulma.css";
import "/public/styles/style.css";

import Footer from "./footer";
import Header from "./header";
import { PropsWithChildren } from "react";
import ScrollButton from "../components/scroll-button/scroll-button";

export const metadata = {
  title: "FOSCH Research Group",
  metadataBase: new URL("https://foschgrouop.github.io"),
  openGraph: {
    title: "FOSCH Research Group",
    url: "https://foschgroup.github.io/",
    locale: "en-US",
    type: "website",
    description: "",
    images: {
      url: "/images/FOSCH_logo.png"
    }
  },
  icons: {
    icon: `data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="-2 -3 24 24" width="24" fill="currentColor"><path d="M7.116 10.749L6 1.948l-1.116 8.8H1c-.552 0-1-.437-1-.976a.99.99 0 0 1 1-.978h2.116l.9-7.086C4.15.636 5.15-.124 6.245.008c.91.11 1.626.81 1.739 1.7l.899 7.086h1.974L12 16.04l1.142-7.245H19c.552 0 1 .438 1 .978s-.448.977-1 .977h-4.142l-.881 5.587a1.978 1.978 0 0 1-1.672 1.634c-1.092.165-2.113-.567-2.282-1.634l-.88-5.587H7.115z"></path></svg>`
  }
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
