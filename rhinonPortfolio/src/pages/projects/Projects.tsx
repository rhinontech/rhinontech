import Buttons from "../../utils/Buttons";
import Divider from "../../utils/Divider";
import project_1 from "../../assets/project_1.png";
import project_2 from "../../assets/project_2.png";
import project_3 from "../../assets/project_3.png";
// import project_big from "../../assets/project_big.png";
import { useState } from "react";

interface Project {
  id: number;
  image: string;
  name: string;
  description: string;
}

function Projects() {
  const projects: Project[] = [
    {
      id: 1,
      image: project_1,
      name: "Content Analyzer",
      description:
        "A robust tool designed for content creators, bloggers, and writers",
    },
    {
      id: 2,
      image: project_2,
      name: "Project 2",
      description: "Description for project 2",
    },
    {
      id: 3,
      image: project_3,
      name: "Project 3",
      description: "Description for project 3",
    },
  ];

  const [selectedProject, setSelectedProject] = useState<Project | null>(
    projects[0]
  ); // Selecting the first project by default

  const handleClick = (project: Project) => {
    setSelectedProject(project);
  };
  return (
    <div className="mt-10 pb-10 mr-[10%] ml-[10%]">
      <p className="poppins text-2xl font-semibold text-left">Projects</p>
      <Divider />
      <div className="mt-7 flex flex-col md:flex-row items-center justify-evenly">
        <Buttons title="Python" width="160" />
        &nbsp;&nbsp;
        <Buttons title="Machine Learning" width="160" />
        &nbsp;&nbsp;
        <Buttons title="NLP" width="160" />
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-10 mt-16">
        <div className="col-span-2 flex items-center justify-center">
          {selectedProject && (
            <div className="profile-shadow p-5 rounded-lg w-[340px] poppins">
              <img
                className="w-[300px] rounded-lg"
                src={selectedProject.image}
                alt={selectedProject.name}
              />
              <p className="text-lg font-semibold mt-2">
                {selectedProject.name}
              </p>
              <p className="text-xs mt-2">{selectedProject.description}</p>
              <i className="fa-brands fa-github text-[40px] mt-4  cursor-pointer"></i>
            </div>
          )}
        </div>
        <div className="md:col-span-1 col-span-2 flex md:flex-col md:items-center justify-evenly md:justify-between ">
          {projects.map((project) => (
            <img
              key={project.id}
              className="w-[60px] md:w-[100px] rounded-full profile-shadow  cursor-pointer"
              src={project.image}
              alt={project.name}
              onClick={() => handleClick(project)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;
