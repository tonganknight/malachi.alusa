"use client";

import Image from "next/image";
import { useState } from "react";
import { useGlobalController } from "@/app/context/GlobalController";
import { Modal } from "../Modal/Modal";
import { HomeHeadingEnum } from "@/app/types/HomeHeadingEnums";
import { HomeSynopsisEnum } from "@/app/types/HomeSynopsis";
import { YearsOfExpEnum } from "@/app/types/YearsOfExpEnum";
import { Discipline } from "@/app/types/DisciplinesEnums";
import { TechStackEnum } from "@/app/types/TechStackEnums";
import { FeaturedProjectSectionEnum } from "@/app/types/FeaturedProjectSectionEnum";
import { NavItem } from "@/app/types/NavEnums";
import { ModalPacket } from "@/app/types/modalPackets";

type TechModalKey = "next" | "csharp" | "sql";

interface TechCard {
  key: TechModalKey;
  title: string;
  imageSrc: string;
  imageAlt: string;
  accent: string;
  synopsis: string;
  caption: string;
}

interface ProjectCardData {
  title: string;
  imageUrl: string;
  gifUrl: string;
  synopsis: string;
  tags: string[];
  eyebrow: string;
  accent: string;
  modalPacket: ModalPacket;
}

const techCards: TechCard[] = [
  {
    key: "next",
    title: "Next.js",
    imageSrc: "/Next.png",
    imageAlt: "Next.js logo",
    accent: "from-cyan-400/35 via-sky-400/20 to-transparent",
    synopsis: TechStackEnum.NextModalContent,
    caption:
      "Modern app shells, fast routing, and polished interaction layers.",
  },
  {
    key: "csharp",
    title: "C#",
    imageSrc: "/CSharp.png",
    imageAlt: "C# logo",
    accent: "from-emerald-400/35 via-lime-400/20 to-transparent",
    synopsis: TechStackEnum.CSharpModalContent,
    caption: "Back-end systems, business workflows, and durable service code.",
  },
  {
    key: "sql",
    title: "SQL",
    imageSrc: "/sql.png",
    imageAlt: "SQL icon",
    accent: "from-blue-400/35 via-indigo-400/20 to-transparent",
    synopsis: TechStackEnum.SQLModalContent,
    caption: "Queries, migrations, and data-heavy application behavior.",
  },
];

const projectCards: ProjectCardData[] = [
  {
    title: "Nature Sunshine Products",
    imageUrl: "/NSP.png",
    gifUrl: "/NSP.gif",
    synopsis:
      "An ecommerce and CMS-driven experience built with Next.js and TailwindCSS for a supplement brand with a large content footprint.",
    tags: ["Next.js", "TailwindCSS", "Optimizly", "TypeScript"],
    eyebrow: "Long-running front-end ownership",
    accent: "from-cyan-400/20 via-sky-400/10 to-transparent",
    modalPacket: {
      imageUrl: "/NSP.gif",
      imageHeight: 400,
      imageAlt: "Image of the NSP website",
      synopsis:
        "Nature Sunshine Products is a supplement company that specializes in natural health products. The website was built using Next.js and TailwindCSS on the front end, and utilizes a custom headless CMS system using Optimizely. For over 2 years I worked on the front end of this website, implementing features, fixing bugs, and improving the user experience.",
      title: "Nature Sunshine Products",
      featurePoints: ["TypeScript", "Next.js", "TailwindCSS", "Optimizely"],
    },
  },
  {
    title: "TestRide",
    imageUrl: "/TestRide.png",
    gifUrl: "/TestRideGIF.gif",
    synopsis: FeaturedProjectSectionEnum.FeaturedProjectSynopsis,
    tags: ["Playwright", "Automation", "TypeScript", "API"],
    eyebrow: "Automation and test generation",
    accent: "from-violet-400/20 via-fuchsia-400/10 to-transparent",
    modalPacket: {
      imageUrl: "/TestRideGIF.gif",
      imageHeight: 400,
      synopsis: FeaturedProjectSectionEnum.FeaturedProjectSynopsis,
      title: "TestRide",
      featurePoints: [
        "TypeScript",
        "Next.js",
        "Playwright",
        "TailwindCSS",
        "API",
      ],
    },
  },
  {
    title: "Peas and Thank You",
    imageUrl: "/PeasAndThankYou.png",
    gifUrl: "/PeasAndThankYouGIF.gif",
    synopsis:
      "A recipe-focused experience with health filtering and API-driven browsing.",
    tags: ["React", "TailwindCSS", "API", "UX"],
    eyebrow: "Filterable recipe discovery",
    accent: "from-emerald-400/20 via-lime-400/10 to-transparent",
    modalPacket: {
      imageUrl: "/PeasAndThankYouGIF.gif",
      imageHeight: 400,
      imageAlt: "Image of the Peas and Thank You website",
      synopsis:
        "Peas and Thank You is a website that focuses on healthy eating and lifestyle. It uses Edamam's generous API to call recipes, and uses a robust health filter system to allow users to filter recipes for specific health requirements.",
      title: "Peas and Thank You",
      featurePoints: ["TypeScript", "Next.js", "TailwindCSS"],
    },
  },
  {
    title: "Task Master Pro",
    imageUrl: "/TaskMasterPro.png",
    gifUrl: "/TaskMasterProGIF.gif",
    synopsis:
      "A task management tool centered on drag-and-drop workflows and efficient team organization.",
    tags: ["React", "Bootstrap", "Node.js", "Productivity"],
    eyebrow: "Workflow management UI",
    accent: "from-orange-400/20 via-amber-400/10 to-transparent",
    modalPacket: {
      imageUrl: "/TaskMasterProGIF.gif",
      imageHeight: 400,
      imageAlt: "Image of the Task Master Pro website",
      synopsis:
        "Task Master Pro is a project management tool that helps teams organize and track their tasks efficiently. It features a user-friendly interface that uses a drag and drop system to allow users to easily manage their tasks and projects. The website was built using React and Bootstrap, and is designed to be responsive and accessible on all devices.",
      title: "Task Master Pro",
      featurePoints: ["TypeScript", "React", "Bootstrap", "Node.js"],
    },
  },
  {
    title: "Git It Done",
    imageUrl: "/GitItDone.png",
    gifUrl: "/GitItDone.png",
    synopsis:
      "A focused repository explorer that helps developers jump into active GitHub issues.",
    tags: ["JavaScript", "GitHub API", "Bootstrap"],
    eyebrow: "Open-source discovery",
    accent: "from-sky-400/20 via-blue-400/10 to-transparent",
    modalPacket: {
      imageUrl: "/GitItDone.png",
      imageHeight: 400,
      imageAlt: "Image of the Git It Done website",
      synopsis:
        "Git It Done helps developers discover open issues across GitHub repositories so they can contribute quickly. It provides a focused interface for finding active repositories and jumping directly into issue lists.",
      title: "Git It Done",
      featurePoints: ["JavaScript", "GitHub API", "Bootstrap"],
    },
  },
];

const projectAccentByIndex = [
  "from-cyan-400/20 via-sky-400/10 to-transparent",
  "from-violet-400/20 via-fuchsia-400/10 to-transparent",
  "from-emerald-400/20 via-lime-400/10 to-transparent",
  "from-orange-400/20 via-amber-400/10 to-transparent",
  "from-sky-400/20 via-blue-400/10 to-transparent",
];

export const HomeDesktop = () => {
  const { setShowContactMe, showProjects, setShowProjects } =
    useGlobalController();
  const [activeTechModal, setActiveTechModal] = useState<TechModalKey | null>(
    null,
  );
  const [showTechModal, setShowTechModal] = useState(false);
  const [activeProjectIndex, setActiveProjectIndex] = useState<number | null>(
    null,
  );
  const [showProjectModal, setShowProjectModal] = useState(false);

  const setShowTechModalAndClear = (nextValue: boolean) => {
    setShowTechModal(nextValue);
    if (!nextValue) {
      setActiveTechModal(null);
    }
  };

  const setShowProjectModalAndClear = (nextValue: boolean) => {
    setShowProjectModal(nextValue);
    if (!nextValue) {
      setActiveProjectIndex(null);
    }
  };

  const openTechModal = (key: TechModalKey) => {
    setActiveTechModal(key);
    setShowTechModal(true);
  };

  const openProjectModal = (index: number) => {
    setActiveProjectIndex(index);
    setShowProjectModal(true);
  };

  const activeTechCard = techCards.find(({ key }) => key === activeTechModal);
  const activeProjectCard =
    activeProjectIndex !== null ? projectCards[activeProjectIndex] : null;

  return (
    <div className="relative flex min-h-screen flex-col overflow-hidden bg-background text-secondary">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-[-10%] top-[-15%] h-[28rem] w-[28rem] rounded-full bg-cyan-400/10 blur-3xl" />
        <div className="absolute right-[-10%] top-[12%] h-[26rem] w-[26rem] rounded-full bg-violet-500/10 blur-3xl" />
        <div className="absolute bottom-[-18%] left-[20%] h-[24rem] w-[24rem] rounded-full bg-sky-500/10 blur-3xl" />
      </div>

      <div className="relative mx-auto flex w-full max-w-[1440px] flex-1 flex-col px-6 py-6 lg:px-10 xl:px-14">
        <header className="sticky top-4 z-40 mb-10 rounded-[1.75rem] border border-edge-primary/70 bg-background/80 px-6 py-4 backdrop-blur-xl shadow-[0_20px_60px_rgba(0,0,0,0.18)]">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-edge-primary bg-foreground/80 text-highlight-primary">
                <span className="text-lg font-black">/</span>
              </div>
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.35em] text-highlight-primary">
                  Portfolio
                </p>
                <p className="font-headline text-xl font-black uppercase text-primary">
                  {NavItem.DevName}
                </p>
              </div>
            </div>

            <nav className="hidden items-center gap-6 lg:flex">
              <a
                href="#about"
                className="text-sm font-medium text-secondary/75 transition hover:text-highlight-primary"
              >
                About
              </a>
              <a
                href="#tech"
                className="text-sm font-medium text-secondary/75 transition hover:text-highlight-primary"
              >
                Tech Stack
              </a>
              <a
                href="#projects"
                className="text-sm font-medium text-secondary/75 transition hover:text-highlight-primary"
              >
                Projects
              </a>
            </nav>

            <button
              type="button"
              onClick={() => setShowContactMe(true)}
              className="rounded-full border border-edge-primary bg-button-primary px-5 py-3 text-sm font-semibold text-white shadow-[0_20px_40px_rgba(124,58,237,0.35)] transition hover:-translate-y-0.5"
            >
              Let&apos;s Connect
            </button>
          </div>
        </header>

        <main className="flex flex-1 flex-col gap-20 pb-10">
          <section
            id="about"
            className="grid items-center gap-12 xl:grid-cols-[1.05fr_0.95fr]"
          >
            <div className="space-y-8">
              <div className="inline-flex items-center gap-3 rounded-full border border-edge-primary/80 bg-foreground/75 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-highlight-primary shadow-lg backdrop-blur">
                Full Stack Engineer
              </div>

              <div className="space-y-5">
                <h1 className="max-w-3xl font-headline text-[clamp(3.5rem,5.8vw,7.2rem)] font-black uppercase leading-[0.88] tracking-[-0.06em] text-secondary">
                  <span className="block">{HomeHeadingEnum.Building}</span>
                  <span className="block text-highlight-primary">
                    {HomeHeadingEnum.Digital}
                  </span>
                  <span className="block">{HomeHeadingEnum.Excellence}</span>
                </h1>

                <p className="max-w-2xl text-lg leading-8 text-secondary/80 xl:text-xl">
                  {HomeSynopsisEnum.Synopsis}
                </p>
              </div>

              <div className="flex flex-wrap gap-4">
                <button
                  type="button"
                  onClick={() => setShowContactMe(true)}
                  className="rounded-full bg-button-primary px-7 py-4 text-sm font-semibold text-white shadow-[0_20px_40px_rgba(124,58,237,0.35)] transition hover:-translate-y-0.5"
                >
                  Let&apos;s Connect
                </button>
                <a
                  href="#projects"
                  className="rounded-full border border-edge-primary bg-foreground/75 px-7 py-4 text-sm font-semibold text-secondary transition hover:border-highlight-primary hover:text-highlight-primary"
                >
                  Explore Projects
                </a>
              </div>

              <div className="grid gap-4 md:grid-cols-3">
                <div className="rounded-[1.75rem] border border-edge-primary/70 bg-foreground/80 p-5 shadow-lg backdrop-blur">
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-highlight-primary/80">
                    Experience
                  </p>
                  <p className="mt-4 font-headline text-4xl font-black text-secondary">
                    {YearsOfExpEnum.Value}
                  </p>
                  <p className="mt-2 text-sm text-secondary/70">
                    {YearsOfExpEnum.Label}
                  </p>
                </div>

                <div className="rounded-[1.75rem] border border-edge-primary/70 bg-foreground/80 p-5 shadow-lg backdrop-blur">
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-highlight-primary/80">
                    Disciplines
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2 text-sm font-semibold text-highlight-primary">
                    <span>{Discipline.FRONTEND}</span>
                    <span>{Discipline.BACKEND}</span>
                    <span>{Discipline.DATABASE}</span>
                  </div>
                  <p className="mt-4 text-sm text-secondary/70">
                    Multi-discipline delivery for product, platform, and data.
                  </p>
                </div>

                <div className="rounded-[1.75rem] border border-edge-primary/70 bg-foreground/80 p-5 shadow-lg backdrop-blur">
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-highlight-primary/80">
                    Focus
                  </p>
                  <p className="mt-4 text-lg font-semibold text-secondary">
                    Modern UI, resilient systems, and clear developer velocity.
                  </p>
                  <p className="mt-2 text-sm text-secondary/70">
                    Ship polished experiences without sacrificing structure.
                  </p>
                </div>
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-[640px]">
              <div className="absolute inset-0 -z-10 rounded-[2.5rem] bg-gradient-to-br from-cyan-400/20 via-transparent to-violet-500/20 blur-3xl" />

              <div className="overflow-hidden rounded-[2.5rem] border border-edge-primary/70 bg-foreground/80 shadow-[0_30px_80px_rgba(0,0,0,0.28)] backdrop-blur-xl">
                <div className="relative">
                  <Image
                    src="/TestRideGIF.gif"
                    alt="TestRide preview"
                    width={1200}
                    height={900}
                    className="h-[34rem] w-full object-cover object-top"
                    priority
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(11,19,38,0)_0%,rgba(11,19,38,0.22)_55%,rgba(11,19,38,0.92)_100%)]" />
                  <div className="absolute bottom-0 left-0 right-0 p-7">
                    <div className="flex flex-wrap gap-2">
                      <span className="rounded-full bg-background/80 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.25em] text-highlight-primary backdrop-blur">
                        Playwright
                      </span>
                      <span className="rounded-full bg-background/80 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.25em] text-highlight-primary backdrop-blur">
                        Automation
                      </span>
                      <span className="rounded-full bg-background/80 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.25em] text-highlight-primary backdrop-blur">
                        Real-time testing
                      </span>
                    </div>
                    <div className="mt-4 max-w-xl space-y-2">
                      <p className="text-sm font-semibold uppercase tracking-[0.3em] text-secondary/60">
                        Spotlight
                      </p>
                      <h2 className="font-headline text-3xl font-black text-secondary">
                        TestRide
                      </h2>
                      <p className="text-sm leading-7 text-secondary/80">
                        {FeaturedProjectSectionEnum.FeaturedProjectSynopsis}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="grid gap-px bg-edge-primary/70 md:grid-cols-2">
                  <div className="bg-background/80 p-5">
                    <p className="text-xs font-semibold uppercase tracking-[0.3em] text-highlight-primary/80">
                      Front end depth
                    </p>
                    <p className="mt-3 text-base leading-7 text-secondary/75">
                      {TechStackEnum.NextModalContent.slice(0, 180)}...
                    </p>
                  </div>
                  <div className="bg-background/80 p-5">
                    <p className="text-xs font-semibold uppercase tracking-[0.3em] text-highlight-primary/80">
                      Platform breadth
                    </p>
                    <p className="mt-3 text-base leading-7 text-secondary/75">
                      {TechStackEnum.CSharpModalContent.slice(0, 180)}...
                    </p>
                  </div>
                </div>
              </div>

              <div className="absolute -left-6 bottom-8 hidden rounded-[1.5rem] border border-edge-primary/70 bg-foreground/90 p-4 shadow-2xl backdrop-blur xl:block">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-highlight-primary/80">
                  Delivery
                </p>
                <p className="mt-2 text-sm text-secondary/80">
                  Responsive systems, refined motion, and production-ready UI.
                </p>
              </div>
            </div>
          </section>

          <section id="tech" className="space-y-8">
            <div className="flex flex-wrap items-end justify-between gap-6">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.35em] text-highlight-primary/80">
                  Capabilities
                </p>
                <h2 className="mt-2 font-headline text-4xl font-black text-secondary">
                  Tech Stack
                </h2>
              </div>
              <p className="max-w-2xl text-sm leading-7 text-secondary/70">
                Desktop presentation with the same assets, but expanded into a
                more editorial layout that gives each stack item room to
                breathe.
              </p>
            </div>

            <div className="grid gap-5 xl:grid-cols-3">
              {techCards.map((card) => (
                <button
                  key={card.key}
                  type="button"
                  onClick={() => openTechModal(card.key)}
                  className="group relative overflow-hidden rounded-[1.9rem] border border-edge-primary/70 bg-foreground/80 p-6 text-left shadow-[0_20px_60px_rgba(0,0,0,0.18)] transition hover:-translate-y-1 hover:border-highlight-primary/60"
                >
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${card.accent} opacity-80 transition group-hover:opacity-100`}
                  />
                  <div className="relative flex h-full flex-col gap-5">
                    <div className="flex items-center justify-between gap-4">
                      <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-edge-primary/70 bg-background/80 p-3 shadow-lg">
                        <Image
                          src={card.imageSrc}
                          alt={card.imageAlt}
                          width={64}
                          height={64}
                          className="h-full w-full object-contain"
                        />
                      </div>
                      <span className="rounded-full border border-edge-primary/70 bg-background/80 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.28em] text-secondary/70">
                        Open modal
                      </span>
                    </div>

                    <div className="space-y-3">
                      <h3 className="font-headline text-2xl font-black text-secondary">
                        {card.title}
                      </h3>
                      <p className="text-sm leading-7 text-secondary/80">
                        {card.caption}
                      </p>
                    </div>

                    <p className="mt-auto text-sm leading-7 text-secondary/75">
                      {card.synopsis.slice(0, 160)}...
                    </p>
                  </div>
                </button>
              ))}
            </div>
          </section>

          <section id="projects" className="space-y-8 pb-8">
            <div className="flex flex-wrap items-end justify-between gap-6">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.35em] text-highlight-primary/80">
                  Portfolio
                </p>
                <h2 className="mt-2 font-headline text-4xl font-black text-secondary">
                  {showProjects ? "All Projects" : "Featured Projects"}
                </h2>
              </div>
              <button
                type="button"
                onClick={() => setShowProjects((prev) => !prev)}
                className="rounded-full border border-edge-primary bg-foreground/75 px-5 py-3 text-sm font-semibold text-secondary transition hover:border-highlight-primary hover:text-highlight-primary"
              >
                {showProjects ? "View Featured" : "View All"}
              </button>
            </div>

            {showProjects ? (
              <div className="grid gap-5 lg:grid-cols-2 xl:grid-cols-3">
                {projectCards.map((project, index) => (
                  <button
                    key={project.title}
                    type="button"
                    onClick={() => openProjectModal(index)}
                    className="group overflow-hidden rounded-[1.9rem] border border-edge-primary/70 bg-foreground/80 text-left shadow-[0_20px_60px_rgba(0,0,0,0.18)] transition hover:-translate-y-1 hover:border-highlight-primary/60"
                  >
                    <div className="relative">
                      <div
                        className={`absolute inset-0 bg-gradient-to-br ${projectAccentByIndex[index % projectAccentByIndex.length]} opacity-90 transition group-hover:opacity-100`}
                      />
                      <Image
                        src={project.imageUrl}
                        alt={project.title}
                        width={900}
                        height={560}
                        className="relative h-64 w-full object-cover object-top"
                      />
                    </div>

                    <div className="space-y-4 p-6">
                      <div className="flex items-center justify-between gap-4">
                        <div>
                          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-highlight-primary/80">
                            {project.eyebrow}
                          </p>
                          <h3 className="mt-2 font-headline text-2xl font-black text-secondary">
                            {project.title}
                          </h3>
                        </div>
                        <span className="rounded-full border border-edge-primary/70 bg-background/80 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.28em] text-secondary/70">
                          View
                        </span>
                      </div>

                      <p className="text-sm leading-7 text-secondary/80">
                        {project.synopsis}
                      </p>

                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="rounded-full border border-edge-primary/70 bg-background/80 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.24em] text-highlight-primary"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            ) : (
              <div className="grid gap-5 xl:grid-cols-[1.15fr_0.85fr]">
                <button
                  type="button"
                  onClick={() => openProjectModal(1)}
                  className="group overflow-hidden rounded-[2rem] border border-edge-primary/70 bg-foreground/80 text-left shadow-[0_20px_60px_rgba(0,0,0,0.18)] transition hover:-translate-y-1 hover:border-highlight-primary/60"
                >
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-violet-400/25 via-fuchsia-400/10 to-transparent opacity-90 transition group-hover:opacity-100" />
                    <Image
                      src={projectCards[1].gifUrl}
                      alt={projectCards[1].title}
                      width={1200}
                      height={760}
                      className="relative h-[32rem] w-full object-cover object-top"
                    />
                  </div>
                  <div className="space-y-4 p-7">
                    <div className="flex items-center justify-between gap-4">
                      <div>
                        <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-highlight-primary/80">
                          Featured project
                        </p>
                        <h3 className="mt-2 font-headline text-3xl font-black text-secondary">
                          {projectCards[1].title}
                        </h3>
                      </div>
                      <span className="rounded-full border border-edge-primary/70 bg-background/80 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.28em] text-secondary/70">
                        Open
                      </span>
                    </div>
                    <p className="text-base leading-8 text-secondary/80">
                      {projectCards[1].synopsis}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {projectCards[1].tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-edge-primary/70 bg-background/80 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.24em] text-highlight-primary"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </button>

                <div className="grid gap-5">
                  {[0, 2, 3, 4].map((projectIndex) => {
                    const project = projectCards[projectIndex];
                    return (
                      <button
                        key={project.title}
                        type="button"
                        onClick={() => openProjectModal(projectIndex)}
                        className="group grid grid-cols-[160px_1fr] overflow-hidden rounded-[1.75rem] border border-edge-primary/70 bg-foreground/80 text-left shadow-[0_20px_60px_rgba(0,0,0,0.18)] transition hover:-translate-y-1 hover:border-highlight-primary/60"
                      >
                        <div className="relative h-full min-h-[12rem]">
                          <div
                            className={`absolute inset-0 bg-gradient-to-br ${project.accent} opacity-90 transition group-hover:opacity-100`}
                          />
                          <Image
                            src={project.imageUrl}
                            alt={project.title}
                            width={500}
                            height={500}
                            className="relative h-full w-full object-cover object-top"
                          />
                        </div>
                        <div className="space-y-3 p-5">
                          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-highlight-primary/80">
                            {project.eyebrow}
                          </p>
                          <h3 className="font-headline text-2xl font-black text-secondary">
                            {project.title}
                          </h3>
                          <p className="text-sm leading-7 text-secondary/80">
                            {project.synopsis}
                          </p>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>
            )}
          </section>
        </main>
      </div>

      {activeTechCard && (
        <Modal
          Header={activeTechCard.title}
          ImageSrc={activeTechCard.imageSrc}
          ImageAlt={activeTechCard.imageAlt}
          showModal={showTechModal}
          setShowModal={setShowTechModalAndClear}
          synopsis={activeTechCard.synopsis}
        />
      )}

      {activeProjectCard && (
        <Modal
          Header={activeProjectCard.title}
          ImageSrc={activeProjectCard.modalPacket.imageUrl}
          ImageAlt={
            activeProjectCard.modalPacket.imageAlt || activeProjectCard.title
          }
          showModal={showProjectModal}
          setShowModal={setShowProjectModalAndClear}
          synopsis={activeProjectCard.modalPacket.synopsis}
          imageHeight={activeProjectCard.modalPacket.imageHeight || 400}
        />
      )}
    </div>
  );
};
