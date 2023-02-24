import "@/styles/globals.css";
import { Manrope } from "@next/font/google";
import localFont from "@next/font/local";

import Header from "@/components/Header";
import { ParallaxProvider } from "react-scroll-parallax";

const manrope = Manrope({ subsets: ["latin"] });
const flexa = localFont({ src: "./fonts/GT-Flexa-Var.ttf" });

export default function App({ Component, pageProps }) {
  return (
    <>
      <style jsx global>{`
        html {
          font-family: ${manrope.style.fontFamily};
        }
        h1,
        h2,
        h4 {
          font-family: ${flexa.style.fontFamily};
        }
      `}</style>
      <ParallaxProvider>
        <Header />
        <Component {...pageProps} />
      </ParallaxProvider>
    </>
  );
}
