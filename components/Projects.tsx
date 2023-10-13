"use client";
import Image from "next/image";
import React from "react";
import Project from "@/public/project.png";
import Project1 from "@/public/project1.png";
import Project2 from "@/public/project2.png";
import Project3 from "@/public/project3.png";
import { BsArrowUpRight } from "react-icons/bs";

type Props = {};

const Projects = (props: Props) => {
  return (
    <div id="projects" className="w-10/12 mx-auto">
      <h1 className="md:text-4xl text-3xl lg:text-5xl font-bold">Projects</h1>
      <p className="pt-6 text-neutral-300">
        Over the years, I have gained experience in designing and developing a
        variety of websites, ranging from simple one-page landing pages to
        complex multi-page applications.Here are some projects that I would like
        to present to all of you, showcasing my work and achievements in the
        field of web design and development.
      </p>

      <div className="mt-20 md:w-9/12 mx-auto">
        <Image
          className="rounded-xl opacity-95 hover:opacity-100"
          src={Project3}
          alt="Projects"
          width={800}
          height={600}
        />
        <div className="my-10 sm:w-10/12 mx-auto">
          <h1 className="text-2xl font-bold mb-4">Clodron Agency Page</h1>
          <p className="text-neutral-300">
            Clodron Agency Page with React & Next.JS & Tailwind CSS
          </p>
          <div className="mt-6 inline-block">
            <a
              href="https://clodron.com"
              className="flex items-center px-4 py-1 border-[0.5px] border-slate-500 rounded-3xl bg-neutral-800 hover:bg-neutral-600"
              target="_blank"
              rel="noreferrer">
              Explore
              <BsArrowUpRight size={14} className="ml-2" />
            </a>
          </div>
        </div>
      </div>

      <div className="mt-20 md:w-9/12 mx-auto">
        <Image
          className="rounded-xl opacity-95 hover:opacity-100"
          src={Project}
          alt="Projects"
          width={800}
          height={600}
        />
        <div className="my-10 sm:w-10/12 mx-auto">
          <h1 className="text-2xl font-bold mb-4">Landing Page</h1>
          <p className="text-neutral-300">
            A Landing page for designers made with React & Next.JS
          </p>
          <div className="mt-6 inline-block">
            <a
              href="https://berke-five.vercel.app"
              target="_blank"
              rel="noreferrer"
              className="flex items-center px-4 py-1 border-[0.5px] border-slate-500 rounded-3xl bg-neutral-800 hover:bg-neutral-600">
              Explore
              <BsArrowUpRight size={14} className="ml-2" />
            </a>
          </div>
        </div>
      </div>

      <div className="mt-20 md:w-9/12 mx-auto">
        <Image
          className="rounded-xl opacity-95 hover:opacity-100"
          src={Project1}
          alt="Projects"
          width={800}
          height={600}
        />
        <div className="my-10 sm:w-10/12 mx-auto">
          <h1 className="text-2xl font-bold mb-4">Next JS </h1>
          <p className="text-neutral-300">
            A marketing agency website made with React & Next.JS
          </p>
          <div className="mt-6 inline-block">
            <a
              href="https://clodronberke.vercel.app/"
              className="flex items-center px-4 py-1 border-[0.5px] border-slate-500 rounded-3xl bg-neutral-800 hover:bg-neutral-600">
              Explore
              <BsArrowUpRight size={14} className="ml-2" />
            </a>
          </div>
        </div>
      </div>

      <div className="mt-20 md:w-9/12 mx-auto">
        <Image
          className="rounded-xl opacity-95 hover:opacity-100"
          src={Project2}
          alt="Projects"
          width={800}
          height={600}
        />
        <div className="my-10 sm:w-10/12 mx-auto">
          <h1 className="text-2xl font-bold mb-4">Next.JS : Website</h1>
          <p className="text-neutral-300">
            A project for AI Prompt made with React & Next.JS
          </p>
          <div className="mt-6 inline-block">
            <a
              href="https://github.com/berkeguleryuz"
              className="flex items-center px-4 py-1 border-[0.5px] border-slate-500 rounded-3xl bg-neutral-800 hover:bg-neutral-600">
              Explore
              <BsArrowUpRight size={14} className="ml-2" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
