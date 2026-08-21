import { Nav } from "@/components/nav";
import { Hero } from "@/components/hero";
import { Stats } from "@/components/stats";
import { WhyGQ } from "@/components/why-gq";
import { Craftsmanship } from "@/components/craftsmanship";
import { NotableProjects } from "@/components/notable-projects";
import { Factory } from "@/components/factory";
import { Products } from "@/components/products";
import { Partners } from "@/components/partners";
import { Clients } from "@/components/clients";
import { Gallery } from "@/components/gallery";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <Nav />
      <Hero />
      <Stats />
      <WhyGQ />
      <Craftsmanship />
      <NotableProjects />
      <Factory />
      <Products />
      <Partners />
      <Clients />
      <Gallery />
      <Contact />
      <Footer />
    </>
  );
}
