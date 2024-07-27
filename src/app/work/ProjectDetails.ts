export type ProjectProps = {
  id: number;
  name: string;
  description: string;
  technologies: string[];
  github: string;
  demo: string;
  image: string;
  available: boolean;
};

export const devProjects = [
  {
    id: 0,
    name: "MamaHub",
    description:
      "This is a website that  mothers at all stages. Nurture community, share experiences, access resources for raising kids today.",
    technologies: ["Vue", "Nodejs", "Expressjs, MongoDB"],
    github: "https://github.com/addymwenda12/MamaHub",
    demo: "frontend-black-rho.vercel.app/",
    image: require("../../../public/project/mamahub.png"),
    available: true,
  },
  {
    id: 1,
    name: "Motile Tech",
    description:
      "Built specifically for AI startups, this website lets them present cutting-edge AI data processing solutions tailored to their customers' needs.",
    technologies: ["React", "Nodejs", "Expressjs, MongoDB"],
    github: "https://github.com/addymwenda12/Motile-Tishere-Application",
    demo: "https://vimeo.com/960981856?share=copy",
    image: require("../../../public/project/motile.png"),
    available: true,
  },
  {
    id: 2,
    name: "Weather App",
    description:
      "A website built for software startups and small businesses, to showcase their services and mark their online presence.",
    technologies: ["React", "Tailwind CSS", "Framer Motion"],
    github: "https://github.com/addymwenda12/ALX_Portfolio-FrontEnd",
    demo: "https://projectweatherappke.netlify.app/",
    image: require("../../../public/project/weather.png"),
    available: true,
  },
];
