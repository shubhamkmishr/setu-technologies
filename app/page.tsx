import Hero from "@/components/hero";
import Services from "@/components/services";
import Work from "@/components/work";
import Process from "@/components/process";
import WhySetu from "@/components/why-setu";
import Pricing from "@/components/pricing";
import Faq from "@/components/faq";
import Contact from "@/components/contact";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <main className="flex flex-col min-h-dvh">
      <Hero />
      <section className="principles" id="about">
        <div className="section-shell principles-inner">
          <p className="eyebrow">A thoughtful technology partner</p>
          <h2>Good technology starts with understanding the business behind it.</h2>
          <div className="principle-list">
            <p><span>01</span> Built around real needs</p>
            <p><span>02</span> Clear communication</p>
            <p><span>03</span> Practical, maintainable solutions</p>
          </div>
        </div>
      </section>
      <Services />
      <Work />
      <Process />
      <WhySetu />
      <Pricing />
      <Faq />
      <Contact />
      <Footer />
    </main>
  );
}
