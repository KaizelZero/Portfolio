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
    title: "Unstoppable Game",
    tech: ["HTML", "JavaScript", "CSS"],
    githubUrl: "https://github.com/kaizelzero/Unstoppable",
    liveUrl: "https://kaizelzero.github.io/Unstoppable/",
    image: "/images/projects/Unstoppable.png",
    description:
      "Unstoppable is a 2D Galaga type game where the player controls a ship that can move and shoot. The player must avoid enemy lasers while shooting the enemies to gain points. The game was created using HTML and JavaScript. Game works best on Google Chrome.",
  },
  {
    title: "Clue Game",
    tech: ["Java", "OOP", "AGILE"],
    githubUrl: "https://github.com/kaizelzero/ClueGame",
    image: "/images/projects/ClueGame.png",
    description:
      "Simple Clue Game with dumb AI and Interactive GUI. This was a group project where we created a game using Java and implemented OOP and AGILE practices. During the development of this game, we had to create unit tests to ensure that our project's logic was correct and worked. This project also helped us develop our Github skills by using branches and merge requests to merge the branch into main.",
  },
  {
    title: "Overcharge",
    tech: ["Godot", "GDScript"],
    liveUrl: "https://kaizelzero.itch.io/overcharge",
    image: "/images/projects/Overcharge.webp",
    description:
      "A game I made for a gamejam. It's a top-down shooter where you can only shoot when you are in a circle of light",
  },
];

export default projects;
