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
    id: "gaze",
    title: "Gaze, no. 4",
    medium: "Graphite on paper",
    year: "2023",
    image:
      "https://images.unsplash.com/photo-1612641605722-60c66c66530c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
    ratio: "tall",
  },
  {
    id: "wren",
    title: "Wren study",
    medium: "Ink & wash",
    year: "2022",
    image:
      "https://images.unsplash.com/photo-1605007622549-018572089f27?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
    ratio: "tall",
  },
  {
    id: "profile",
    title: "Profile in pencil",
    medium: "Charcoal",
    year: "2023",
    image:
      "https://images.unsplash.com/photo-1616898297271-47896b4daaf1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
    ratio: "tall",
  },
  {
    id: "sitting",
    title: "The sitting",
    medium: "Graphite",
    year: "2021",
    image:
      "https://images.unsplash.com/photo-1569154076682-4c0466623ec2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=900",
    ratio: "wide",
  },
  {
    id: "notes",
    title: "Pillow notes",
    medium: "Pen on paper",
    year: "2024",
    image:
      "https://images.unsplash.com/photo-1742130847739-f7728ae50176?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
    ratio: "tall",
  },
  {
    id: "abstract",
    title: "Faint abstractions",
    medium: "Graphite on kraft",
    year: "2024",
    image:
      "https://images.unsplash.com/photo-1782879429032-8bb03f691b8e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1000",
    ratio: "wide",
  },
];
