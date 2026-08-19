import { Nav } from "@/components/nav";
import { Hero } from "@/components/hero";
import { Stats } from "@/components/stats";
import { WhyGQ } from "@/components/why-gq";
import { Craftsmanship } from "@/components/craftsmanship";
import { Products } from "@/components/products";
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
      <Products />
      <Gallery />
      <Contact />
      <Footer />
    </>
  );
}
