import Image from "next/image";
import styles from "./page.module.css";
import LandingPage from "./landingPage";
import HighLights from "./highlights";
import Categories from "./Categories";
import Footer from "./footer";

export default function Home() {
  return (
    <>
      <LandingPage />
      <HighLights />
      <Categories />
      <Footer />
    </>
  );
}
