import gallery1 from "../../assets/images/Gallery Images/Gallery Image 1.png";
import gallery2 from "../../assets/images/Gallery Images/Gallery Image 2.png";
import gallery3 from "../../assets/images/Gallery Images/Gallery Image 3.png";
import gallery4 from "../../assets/images/Gallery Images/Gallery Image 4.png";
import gallery5 from "../../assets/images/Gallery Images/Gallery Image 5.png";
import gallery6 from "../../assets/images/Gallery Images/Gallery Image 6.png";

export interface Sketch {
  id: string;
  title: string;
  medium: string;
  year: string;
  image: string;
  ratio: "tall" | "wide" | "square";
}

export const sketches: Sketch[] = [
  {
    id: "drawing-1",
    title: "Sketch Study 01",
    medium: "Graphite on paper",
    year: "2024",
    image: gallery1,
    ratio: "tall",
  },
  {
    id: "drawing-2",
    title: "Sketch Study 02",
    medium: "Pencil & Ink",
    year: "2024",
    image: gallery2,
    ratio: "tall",
  },
  {
    id: "drawing-3",
    title: "Sketch Study 03",
    medium: "Charcoal & Graphite",
    year: "2024",
    image: gallery3,
    ratio: "tall",
  },
  {
    id: "drawing-4",
    title: "Sketch Study 04",
    medium: "Pencil on paper",
    year: "2024",
    image: gallery4,
    ratio: "tall",
  },
  {
    id: "drawing-5",
    title: "Sketch Study 05",
    medium: "Ink & wash",
    year: "2024",
    image: gallery5,
    ratio: "tall",
  },
  {
    id: "drawing-6",
    title: "Sketch Study 06",
    medium: "Graphite on paper",
    year: "2024",
    image: gallery6,
    ratio: "tall",
  },
];
