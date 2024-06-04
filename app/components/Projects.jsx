import Image from "next/image";
import Github from "./Svg/Github";
import React from "./Svg/React";
import MongoDb from "./Svg/MongoDb";
import Link from "next/link";

const projects = [
  {
    title: "Care For Indians",
    thumbnail: "/test.png",
    stack: [
      "/nextjs.png",
      "/tailwind.svg",
      "/mongodb.svg",
      "/nextauth.png",
      "/shadcn.png",
    ],
    type: "Full Stack Development",
    description:
      "Some quick example text to build on the card title and make up the bulk of the card's content.",
    link: "#",
  },
  {
    title: "Lunch Money",
    thumbnail: "/lunchmoney.png",
    stack: ["/nextjs.png", "/bootstrap.svg", "/mongodb.svg"],
    type: "Full Stack Development",
    description:
      "Some quick example text to build on the card title and make up the bulk of the card's content.",
    link: "https://lunchmoney.io/",
  },
  {
    title: "R For Red",
    thumbnail: "/rforred.png",
    stack: ["/nextjs.png", "/bootstrap.svg"],
    type: "Frontend Development",
    description:
      "Some quick example text to build on the card title and make up the bulk of the card's content.",
    link: "https://rforred2024.anahatngo.org/",
  },
  {
    title: "Carca Rapid Solutions",
    thumbnail: "/carca.png",
    stack: ["/nextjs.png", "/bootstrap.svg"],
    type: "Frontend Development",
    description:
      "Some quick example text to build on the card title and make up the bulk of the card's content.",
    link: "https://www.carcarapid.in/",
  },
  {
    title: "DNC Tool",
    thumbnail: "/transcribe.png",
    stack: ["/nextjs.png", "/nodejs.svg", "mongodb.svg", "/chakra.svg"],
    type: "Full Stack Development",
    description:
      "Some quick example text to build on the card title and make up the bulk of the card's content.",
    link: "#",
  },
  {
    title: "Transcribe Audio",
    thumbnail: "/transcribe.png",
    stack: ["/react.svg", "/nodejs.svg", "mongodb.svg", "/chakra.svg"],
    type: "Full Stack Development",
    description:
      "Some quick example text to build on the card title and make up the bulk of the card's content.",
    link: "#",
  },
  {
    title: "Btc Farm",
    thumbnail: "/btcfarm.png",
    stack: ["/react.svg", "/bootstrap.svg"],
    type: "Frontend Development",
    description:
      "Some quick example text to build on the card title and make up the bulk of the card's content.",
    link: "#",
  },
];

export default function Projects() {
  return (
    <div className="container max-w-[85rem] mx-auto px-4 text-white">
      <h1 className="text-5xl md:text-6xl font-semibold text-start mt-10">
        Projects
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8 mt-10">
        {projects.map((project) => {
          return (
            <div className="border-3 border-white rounded-xl overflow-hidden shadow-lg">
              <div className="flex flex-col bg-white border-2 hover:border-white shadow-sm rounded-xl p-4 md:p-4 dark:bg-neutral-900 dark:border-neutral-700 dark:shadow-neutral-700/70">
                <div className="relative h-64">
                  <Image
                    src={project.thumbnail}
                    alt="Placeholder"
                    className="h-full w-full rounded-xl cursor-pointer object-cover"
                    layout="fill"
                  />
                </div>
                <div className="py-4">
                  <h3 className="text-lg font-bold text-gray-800 dark:text-white">
                    {project.title}
                  </h3>
                  <p className="mt-1 text-xs font-medium uppercase text-gray-500 dark:text-neutral-500">
                    {project.type}
                  </p>
                  <p className="mt-2 text-gray-500 dark:text-neutral-400">
                    {project.description}
                  </p>

                  <div className="flex flex-auto flex-wrap gap-3 flex-row my-2">
                    {project.stack.map((stack) => {
                      return (
                        <img src={stack} alt="React" className="w-6 h-6" />
                      );
                    })}
                  </div>
                  {project.link === "#" ? (
                    <span className="mt-3 inline-flex items-center gap-x-1 text-sm font-semibold rounded-lg border border-transparent text-white hover:text-blue-800 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:text-blue-400">
                      Closed
                      <svg
                        className="flex-shrink-0 w-4 h-4"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M9 18l6-6-6-6"></path>
                      </svg>
                    </span>
                  ) : (
                    <Link
                      className="mt-3 inline-flex items-center gap-x-1 text-sm font-semibold rounded-lg border border-transparent text-blue-600 hover:text-blue-800 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:text-blue-400"
                      href={project.link}
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      Live Link
                      <svg
                        className="flex-shrink-0 w-4 h-4"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M9 18l6-6-6-6"></path>
                      </svg>
                    </Link>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
