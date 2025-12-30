import React from "react";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
// import appleVison from "../assets/appleVision.avif"

const projects = [
  {
    title: "TuneStream",
    description:
      "Built a platform where users can sell or exchange old smartphones by estimating device value, generating quotes, and managing pickup requests.",
    image:
      "https://media.istockphoto.com/id/1241459865/photo/listen-music-online-concept-online-music-player-app-on-smartphone.jpg?s=2048x2048&w=is&k=20&c=zN0CIvHsWICgqWgHtzF_a9a_giXlGez8YTxOVrGHZrM=",
    tags: ["Html","CSS","React", "Tailwind CSS", "JavaScript","MongoDB","Passport JS","Node JS","Express JS"],
    liveLink: "https://sportify-woad.vercel.app/auth",
    githubLink: "https://github.com/34lokeshyadav/sportify",
  },

  {
    title: "Code Editor",
    description:
      "A code editor is a software tool used to write, edit, and manage source code efficiently with features like syntax highlighting and auto-completion",
    image:
      "https://repository-images.githubusercontent.com/468515960/b53b1828-3bcf-4875-94b2-10990bdd5371",
    tags: ["Html","CSS","React", "Tailwind CSS", "JavaScript","MongoDB","Passport JS","Node JS","Express JS"],
    liveLink: "",
    githubLink: "https://github.com/34lokeshyadav/Code-editor",
  },

  {
    title: "SecurePay",
    description:
      "SecurePay is a fast and reliable payment gateway that ensures safe, seamless, and encrypted digital transactions for businesses and customers.",
    image:
      "https://static.vecteezy.com/system/resources/thumbnails/029/899/733/small/secure-payment-credit-card-icon-with-shield-secure-transaction-stock-illustration-vector.jpg",
    tags: ["Html","CSS","React", "Tailwind CSS", "JavaScript","MongoDB","Passport JS","Node JS","Express JS"],
    liveLink: "https://payment-nu-weld.vercel.app/",
    githubLink: "https://github.com/34lokeshyadav/payment",
  },

  // {
  //   title: "FitClub Gym Website",
  //   description:
  //     "A modern fitness website with responsive design, and membership features.",
  //   image:
  //     "https://images.unsplash.com/photo-1554284126-aa88f22d8b74?auto=format&fit=crop&w=1470&q=80",
  //   tags: ["React", "Tailwind CSS", "JavaScript"],
  //   liveLink: "fitclub-mauve.vercel.app",
  //   githubLink: "https://github.com/kumkumsahu1505/Fitclub",
  // },


  // {
  //   title: "Apple Vision",
  //   description:
  //     "A sleek product showcase inspired by Apple Vision Pro with smooth animations and 3D effects.",
  //   image:
  //     "https://images.unsplash.com/photo-1580948717721-b653147d26dd?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  //   tags: ["Html","Css" ,"Gsap"],
  //   liveLink: "https://kumkumsahu1505.github.io/VisionPro/",
  //   githubLink: "https://github.com/kumkumsahu1505/VisionPro",
  // },
  // {
  //   title: "Employee Management System",
  //   description:
  //     "A web application to manage employees and admin interaction for the task assignment , and keep the track of assigned task with authentication.",
  //   image:
  //     "https://images.unsplash.com/photo-1557425493-6f90ae4659fc?auto=format&fit=crop&w=1470&q=80",
  //   tags: ["React","Tailwind csss", "Node.js", "MongoDB"],
  //   liveLink: "https://your-ems-live-link.com",
  //   githubLink: "https://github.com/kumkumsahu1505/Employee-Management-System",
  // },
  // {
  //   title: "Duo Studio",
  //   description:
  //     "A portfolio and branding website for a creative agency with modern layouts and animations.",
  //   image:
  //     "https://images.unsplash.com/photo-1504805572947-34fad45aed93?auto=format&fit=crop&w=1470&q=80",
  //   tags: ["React", "GSAP", "Tailwind CSS"],
  //   liveLink: "https://kumkumsahu1505.github.io/DuoStudio/",
  //   githubLink: "https://github.com/kumkumsahu1505/DuoStudio",
  // },
  // {
  //   title: "URL Shortener",
  //   description:
  //     "A simple and fast tool to shorten long URLs with analytics tracking.",
  //   image:
  //     "https://images.pexels.com/photos/6937932/pexels-photo-6937932.jpeg",
  //   tags: ["Node.js", "Express", "MongoDB","Recat js"],
  //   liveLink: "https://your-url-shortener-live-link.com",
  //   githubLink: "https://github.com/kumkumsahu1505/urlShortner",
  // },
  // {
  //   title: "CRUD Operation App",
  //   description:
  //     "A basic CRUD application to create, read, update, and delete data using a REST API.",
  //   image:
  //     "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1470&q=80",
  //   tags: ["React", "Node.js", "Express"],
  //   liveLink: "https://your-crud-app-live-link.com",
  //   githubLink: "https://github.com/kumkumsahu1505/CRUD_Operation_AXIOS",
  // },
];

const ProjectSection = () => {
  return (
    <section className="py-20 bg-gray-900 text-white" id="projects">
      <div className="mx-auto px-6">
        {/* Section Title */}
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold uppercase tracking-wider relative inline-block">
            My Projects
            <span className="block h-1 w-20 bg-yellow-500 mx-auto mt-3 rounded-full"></span>
          </h2>
        </div>

        {/* Projects Grid */}
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-yellow-500/20 transition-transform transform hover:-translate-y-2"
            >
              <div className="h-52 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-6 flex flex-col justify-between">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-300 text-sm mb-4">
                  {project.description}
                </p>
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="text-xs bg-yellow-500 text-black px-2 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                {/* Links */}
                <div className="flex gap-4 text-lg">
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-yellow-500 transition"
                  >
                    <FaExternalLinkAlt />
                  </a>
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-yellow-500 transition"
                  >
                    <FaGithub />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
