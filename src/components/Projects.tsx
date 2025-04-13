import jackGallery from "../assets/sony-gallery.png";
import gameHub from "../assets/game-hub.png";
import IconComponent from "./IconComponent";

const Projects = () => {
  const projects = [
    {
      title: "Game Hub",
      description:
        "A dinamic web application which displays some of the most popular video games, with the option to sort the games based on rating , gere, platform and relevance",
      ImgUrl: gameHub,
      Url: "https://game-platform-project.vercel.app",
      techStack: ["react", "typescript", "javascript", "chakra"],
    },
    {
      title: "Jack Sony Pictures",
      description:
        "A portfolio gallery for a small business to show their work and contact details, te user has full access to the layout of the gallery, and can personalize at any minute",
      imgUrl: jackGallery,
      Url: "http://tazasrotas.000webhostapp.com/jack-sony-pictures/gallery.html",
      techStack: [""],
    },
  ];

  return (
    <div id="Projects" className="">
      <div className="box grid grid-rows px-7 py-11 m-4 rounded-2xl">
        <div className="w-full h-7 border mb-3">
          <h3>MY PROJECTS</h3>
        </div>
        <div className="w-full">
          {projects.map((project, index) => {
            return <ProjectCard key={index} {...project} />;
          })}
        </div>
      </div>
    </div>
  );
};

const ProjectCard = ({ title, description, imgUrl, Url, techStack }) => {
  return (
    <div className=" grid grid-cols-5">
      <div className="col-span-3">
        <img src={imgUrl} />
      </div>

      <div className="col-span-2">
        <div className="">
          <h4 className="my-6">{title}</h4>
          <p className="my-6">{description}</p>
          <div className="my-6 flex">
            <IconComponent techArray={techStack} />
          </div>
          <a href={Url} className="visit-btn p-1.5 my-3 rounded-lg">
            Visit Project
          </a>
        </div>
      </div>
    </div>
  );
};
export default Projects;
