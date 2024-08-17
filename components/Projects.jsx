import Image from "next/image";
import Github from "./Svg/Github";
import React from "./Svg/React";
import MongoDb from "./Svg/MongoDb";
import Link from "next/link";

const projects = [
  {
    id: 1,
    title: "Food Commerce (College Project)",
    thumbnail: "/food-commerce.png",
    stack: ["/nextjs.png", "/tailwind.svg", "/mongodb.svg", "/nextauth.png"],
    type: "Full Stack Development",
    description:
      "College project for food commerce. It is a full stack project with Next.js, Tailwind CSS, MongoDB, and NextAuth.",
    link: "#",
  },
  {
    id: 2,
    title: "Care For Indians",
    thumbnail: "/careforindians.png",
    stack: [
      "/nextjs.png",
      "/tailwind.svg",
      "/mongodb.svg",
      "/nextauth.png",
      "/shadcn.png",
    ],
    type: "Full Stack Development",
    description:
      "A platform for people to find and services such as child care, meal care, and more. It is a full stack project with Next.js, Tailwind CSS, MongoDB, NextAuth, and Shadcn.",
    link: "#",
  },
  {
    id: 3,
    title: "Lunch Money",
    thumbnail: "/lunchmoney.png",
    stack: ["/nextjs.png", "/bootstrap.svg", "/mongodb.svg", "twilio.svg"],
    type: "Full Stack Development",
    description:
      "A platform where users can rate their lunch experience and get a chance to win a free lunch. It is a full stack project with Next.js, Bootstrap, MongoDB, and Twilio.",
    link: "https://lunchmoney.io/",
  },
  {
    id: 4,
    title: "R For Red",
    thumbnail: "/rforred.png",
    stack: ["/nextjs.png", "/bootstrap.svg"],
    type: "Frontend Development",
    description:
      "An event website for R For Red. It was made for the event R For Red 2024 which is an awarness event for menstrual hygiene. It is a frontend project with Next.js and Bootstrap.",
    link: "https://rforred2024.anahatngo.org/",
  },
  {
    id: 5,
    title: "Carca Rapid Solutions",
    thumbnail: "/carca.png",
    stack: ["/nextjs.png", "/bootstrap.svg"],
    type: "Frontend Development",
    description:
      "A website for Carca Rapid Solutions. It is a frontend project with Next.js and Bootstrap.",
    link: "https://www.carcarapid.in/",
  },
  {
    id: 6,
    title: "DNC Tool",
    thumbnail: "/dnc.png",
    stack: ["/nextjs.png", "/nodejs.svg", "mongodb.svg", "/chakra.svg"],
    type: "Full Stack Development",
    description:
      "A platform where users can list their phone numbers to be added to the Do Not Call list. It is a full stack project with Next.js, Node.js, MongoDB, and Chakra UI.",
    link: "#",
  },
  {
    id: 7,
    title: "Transcribe Audio",
    thumbnail: "/transcribe.png",
    stack: ["/react.svg", "/nodejs.svg", "mongodb.svg", "/chakra.svg"],
    type: "Full Stack Development",
    description:
      "A platform where users can upload audio files and get the transcribed text. It is a full stack project with React, Node.js, MongoDB, and Chakra UI.",
    link: "#",
  },
  {
    id: 8,
    title: "Btc Farm",
    thumbnail: "/btcfarm.png",
    stack: ["/react.svg", "/bootstrap.svg"],
    type: "Frontend Development",
    description:
      "A platform where users can invest in bitcoin mining. It is a frontend project with React and Bootstrap.",
    link: "#",
  },
];

export default function Projects() {
  return (
    <section id="projects">
      <div className="container mx-auto max-w-[85rem] px-4 text-white">
        <h1 className="mt-5 text-start text-4xl font-semibold md:mt-10 md:text-6xl">
          Projects
        </h1>
        <div className="mt-5 grid grid-cols-1 gap-8 md:mt-10 md:grid-cols-3 lg:grid-cols-3">
          {projects.map((project) => {
            return (
              <div
                className="border-3 overflow-hidden rounded-xl border-white shadow-lg"
                key={project.id}
              >
                <div className="flex flex-col rounded-xl border-2 bg-white p-4 shadow-sm hover:border-white md:p-4 dark:border-neutral-700 dark:bg-neutral-900 dark:shadow-neutral-700/70">
                  <div className="relative h-64">
                    <Image
                      src={project.thumbnail}
                      alt={project.title}
                      className="h-full w-full cursor-pointer rounded-xl object-cover"
                      priority
                      fill
                    />
                  </div>
                  <div className="py-4">
                    <h3 className="text-lg font-bold text-gray-800 dark:text-white">
                      {project.title}
                    </h3>
                    <p className="mt-1 text-xs font-medium uppercase text-gray-500 dark:text-neutral-500">
                      {project.type}
                    </p>
                    <p className="mt-2 line-clamp-2 text-gray-500 dark:text-neutral-400">
                      {project.description}
                    </p>

                    <div className="my-2 flex flex-auto flex-row flex-wrap gap-3">
                      {project.stack.map((stack) => {
                        return (
                          <img src={stack} alt="React" className="h-6 w-6" />
                        );
                      })}
                    </div>
                    {project.link === "#" ? (
                      <span className="mt-3 inline-flex items-center gap-x-1 rounded-lg border border-transparent text-sm font-semibold text-white hover:text-blue-800 disabled:pointer-events-none disabled:opacity-50 dark:text-white dark:hover:text-blue-400">
                        Closed
                        <svg
                          className="h-4 w-4 flex-shrink-0"
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
                        className="mt-3 inline-flex items-center gap-x-1 rounded-lg border border-transparent text-sm font-semibold text-blue-600 hover:text-blue-800 disabled:pointer-events-none disabled:opacity-50 dark:text-blue-500 dark:hover:text-blue-400"
                        href={project.link}
                        target="_blank"
                        rel="noreferrer noopener"
                      >
                        Live Link
                        <svg
                          className="h-4 w-4 flex-shrink-0"
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
    </section>
  );
}
