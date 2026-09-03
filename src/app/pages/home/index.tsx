import { Hero } from "./sections/Hero";
import { MarqueeStrip } from "./sections/MarqueeStrip";
import { Stats } from "./sections/Stats";
import { FeaturedWork } from "./sections/FeaturedWork";
import { Approach } from "./sections/Approach";
import { Specializations } from "./sections/Specializations";
import { SketchWall } from "../../components/sections/ArtGallery";

export default function Home() {
  return (
    <>
      <Hero />
      <MarqueeStrip />
      <Stats />
      <FeaturedWork />
      <SketchWall />
      <Approach />
      <Specializations />
    </>
  );
}
