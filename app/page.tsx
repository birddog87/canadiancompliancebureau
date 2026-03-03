import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { NoticeBar } from "./components/NoticeBar";
import { About } from "./components/About";
import { Services } from "./components/Services";
import { ComplaintForm } from "./components/ComplaintForm";
import { Resources } from "./components/Resources";
import { CtaBanner } from "./components/CtaBanner";
import { Footer } from "./components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <NoticeBar />
      <About />
      <Services />
      <ComplaintForm />
      <Resources />
      <CtaBanner />
      <Footer />
    </>
  );
}
