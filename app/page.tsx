import { Nav } from "@/components/nav";
import { Hero } from "@/components/hero";
import { Stats } from "@/components/stats";
import { WhyGQ } from "@/components/why-gq";
import { Craftsmanship } from "@/components/craftsmanship";
import { Factory } from "@/components/factory";
import { Products } from "@/components/products";
import { Partners } from "@/components/partners";
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
      <Factory />
      <Products />
      <Partners />
      <Gallery />
      <Contact />
      <Footer />
    </>
  );
}
