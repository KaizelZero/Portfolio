export type Project = {
  title: string;
  tech: string[];
  inProgress?: boolean;
  image?: string;
  liveUrl?: string;
  githubUrl?: string;
  description?: string;
};

const projects: Project[] = [
  {
    title: "Dictionary App",
    tech: ["ReactJS (NextJS)", "react-query", "zod"],
    githubUrl: "https://github.com/MaeWolff/dictionary-app",
    liveUrl: "https://google.com",
    image:
      "https://images.unsplash.com/photo-1556740749-887f6717d7e4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
    description: "This is a description",
  },
  {
    title: "Dictionary App",
    tech: ["ReactJS (NextJS)", "react-query", "zod"],
    githubUrl: "https://github.com/MaeWolff/dictionary-app",
    liveUrl: "https://google.com",
    image:
      "https://images.unsplash.com/photo-1556740749-887f6717d7e4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
  },
  {
    title: "Portfolio / Lina BLIDI",
    tech: ["ReactJS (NextJS)", "TypeScript"],
    liveUrl: "https://www.linablidi.fr/",
    image:
      "https://images.unsplash.com/photo-1556740749-887f6717d7e4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
  },
  {
    title: "Portfolio / Template",
    tech: ["Astro"],
    inProgress: true,
    image:
      "https://images.unsplash.com/photo-1556740749-887f6717d7e4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
  },
];

export default projects;
