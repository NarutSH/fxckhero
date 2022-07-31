import Head from "next/head";
import Image from "next/image";
import Avatar from "../components/Avatar";
import Banner from "../components/Banner";
import BoredApe from "../components/BoredApe";
import Faq from "../components/Faq";
import Footer from "../components/Footer";
import LearnMore from "../components/LearnMore";
import Statistics from "../components/Statistics";
import Voc from "../components/Voc";

export default function Home() {
  return (
    <div className="">
      <Banner />
      <LearnMore />
      <Statistics />
      <Avatar />
      <Voc />
      <BoredApe />
      <Faq />
      <Footer />
    </div>
  );
}
