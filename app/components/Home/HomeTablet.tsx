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
    gifUrl: "/GitItDoneGIF.gif",
    synopsis:
      "A focused repository explorer that helps developers jump into active GitHub issues.",
    tags: ["JavaScript", "GitHub API", "Bootstrap"],
    eyebrow: "Open-source discovery",
    accent: "from-sky-400/20 via-blue-400/10 to-transparent",
    modalPacket: {
      imageUrl: "/GitItDoneGIF.gif",
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

export const HomeTablet = () => {
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
        <div className="absolute left-[-12%] top-[-12%] h-[20rem] w-[20rem] rounded-full bg-cyan-400/10 blur-3xl" />
        <div className="absolute right-[-10%] top-[18%] h-[20rem] w-[20rem] rounded-full bg-violet-500/10 blur-3xl" />
        <div className="absolute bottom-[-18%] left-[18%] h-[20rem] w-[20rem] rounded-full bg-sky-500/10 blur-3xl" />
      </div>

      <div className="relative mx-auto flex w-full max-w-[1100px] flex-1 flex-col px-5 py-5 sm:px-6 md:px-8 lg:px-10">
        <header className="sticky top-3 z-40 mb-8 rounded-[1.5rem] border border-edge-primary/70 bg-background/85 px-5 py-4 backdrop-blur-xl shadow-[0_18px_50px_rgba(0,0,0,0.18)]">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.35em] text-highlight-primary">
                Portfolio
              </p>
              <p className="mt-1 font-headline text-lg font-black uppercase text-primary sm:text-xl">
                {NavItem.DevName}
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-[0.25em] text-secondary/65 sm:text-[11px]">
              <a
                href="#tablet-about"
                className="transition hover:text-highlight-primary"
              >
                About
              </a>
              <a
                href="#tablet-tech"
                className="transition hover:text-highlight-primary"
              >
                Tech
              </a>
              <a
                href="#tablet-projects"
                className="transition hover:text-highlight-primary"
              >
                Projects
              </a>
            </div>

            <button
              type="button"
              onClick={() => setShowContactMe(true)}
              className="rounded-full border border-edge-primary bg-button-primary px-4 py-2 text-xs font-semibold text-white shadow-[0_16px_30px_rgba(124,58,237,0.34)] transition hover:-translate-y-0.5 sm:px-5 sm:py-3 sm:text-sm"
            >
              Let&apos;s Connect
            </button>
          </div>
        </header>

        <main className="flex flex-1 flex-col gap-14 pb-10">
          <section
            id="tablet-about"
            className="grid items-center gap-8 xl:grid-cols-[0.95fr_1.05fr]"
          >
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 rounded-full border border-edge-primary/80 bg-foreground/75 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.3em] text-highlight-primary shadow-lg backdrop-blur sm:text-[11px]">
                Full Stack Engineer
              </div>

              <div className="space-y-4">
                <h1 className="max-w-2xl font-headline text-[clamp(2.8rem,6.5vw,5.4rem)] font-black uppercase leading-[0.9] tracking-[-0.06em] text-secondary">
                  <span className="block">{HomeHeadingEnum.Building}</span>
                  <span className="block text-highlight-primary">
                    {HomeHeadingEnum.Digital}
                  </span>
                  <span className="block">{HomeHeadingEnum.Excellence}</span>
                </h1>

                <p className="max-w-2xl text-base leading-7 text-secondary/80 sm:text-lg">
                  {HomeSynopsisEnum.Synopsis}
                </p>
              </div>

              <div className="flex flex-wrap gap-3 sm:gap-4">
                <button
                  type="button"
                  onClick={() => setShowContactMe(true)}
                  className="rounded-full bg-button-primary px-6 py-3 text-sm font-semibold text-white shadow-[0_18px_34px_rgba(124,58,237,0.35)] transition hover:-translate-y-0.5"
                >
                  Let&apos;s Connect
                </button>
                <a
                  href="#tablet-projects"
                  className="rounded-full border border-edge-primary bg-foreground/75 px-6 py-3 text-sm font-semibold text-secondary transition hover:border-highlight-primary hover:text-highlight-primary"
                >
                  Explore Projects
                </a>
              </div>

              <div className="grid gap-3 sm:grid-cols-3">
                <div className="rounded-[1.5rem] border border-edge-primary/70 bg-foreground/80 p-4 shadow-lg backdrop-blur">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-highlight-primary/80 sm:text-[11px]">
                    Experience
                  </p>
                  <p className="mt-3 font-headline text-3xl font-black text-secondary">
                    {YearsOfExpEnum.Value}
                  </p>
                  <p className="mt-1 text-sm text-secondary/70">
                    {YearsOfExpEnum.Label}
                  </p>
                </div>

                <div className="rounded-[1.5rem] border border-edge-primary/70 bg-foreground/80 p-4 shadow-lg backdrop-blur">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-highlight-primary/80 sm:text-[11px]">
                    Disciplines
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2 text-sm font-semibold text-highlight-primary">
                    <span>{Discipline.FRONTEND}</span>
                    <span>{Discipline.BACKEND}</span>
                    <span>{Discipline.DATABASE}</span>
                  </div>
                  <p className="mt-3 text-sm text-secondary/70">
                    Multi-discipline delivery for product, platform, and data.
                  </p>
                </div>

                <div className="rounded-[1.5rem] border border-edge-primary/70 bg-foreground/80 p-4 shadow-lg backdrop-blur">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-highlight-primary/80 sm:text-[11px]">
                    Focus
                  </p>
                  <p className="mt-3 text-base font-semibold text-secondary">
                    Modern UI, resilient systems, and clear velocity.
                  </p>
                  <p className="mt-1 text-sm text-secondary/70">
                    Production-ready design with room for breathing space.
                  </p>
                </div>
              </div>
            </div>

            <div className="relative w-full">
              <div className="absolute inset-0 -z-10 rounded-[2rem] bg-gradient-to-br from-cyan-400/20 via-transparent to-violet-500/20 blur-3xl" />

              <div className="overflow-hidden rounded-[2rem] border border-edge-primary/70 bg-foreground/80 shadow-[0_26px_70px_rgba(0,0,0,0.26)] backdrop-blur-xl">
                <div className="relative">
                  <Image
                    src="/TestRideGIF.gif"
                    alt="TestRide preview"
                    width={1200}
                    height={820}
                    className="h-[24rem] w-full object-cover object-top sm:h-[28rem]"
                    priority
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(11,19,38,0)_0%,rgba(11,19,38,0.25)_55%,rgba(11,19,38,0.92)_100%)]" />
                  <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-7">
                    <div className="flex flex-wrap gap-2">
                      <span className="rounded-full bg-background/80 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.24em] text-highlight-primary backdrop-blur sm:text-[11px]">
                        Playwright
                      </span>
                      <span className="rounded-full bg-background/80 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.24em] text-highlight-primary backdrop-blur sm:text-[11px]">
                        Automation
                      </span>
                      <span className="rounded-full bg-background/80 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.24em] text-highlight-primary backdrop-blur sm:text-[11px]">
                        Real-time testing
                      </span>
                    </div>
                    <div className="mt-3 max-w-xl space-y-2">
                      <p className="text-xs font-semibold uppercase tracking-[0.3em] text-secondary/60">
                        Spotlight
                      </p>
                      <h2 className="font-headline text-2xl font-black text-secondary sm:text-3xl">
                        TestRide
                      </h2>
                      <p className="text-sm leading-6 text-secondary/80 sm:text-[15px]">
                        {FeaturedProjectSectionEnum.FeaturedProjectSynopsis}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="grid gap-px bg-edge-primary/70 md:grid-cols-2">
                  <div className="bg-background/80 p-4 sm:p-5">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-highlight-primary/80 sm:text-[11px]">
                      Front end depth
                    </p>
                    <p className="mt-2 text-sm leading-6 text-secondary/75 sm:text-base sm:leading-7">
                      {TechStackEnum.NextModalContent.slice(0, 150)}...
                    </p>
                  </div>
                  <div className="bg-background/80 p-4 sm:p-5">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-highlight-primary/80 sm:text-[11px]">
                      Platform breadth
                    </p>
                    <p className="mt-2 text-sm leading-6 text-secondary/75 sm:text-base sm:leading-7">
                      {TechStackEnum.CSharpModalContent.slice(0, 150)}...
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section id="tablet-tech" className="space-y-6">
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.35em] text-highlight-primary/80 sm:text-[11px]">
                  Capabilities
                </p>
                <h2 className="mt-2 font-headline text-3xl font-black text-secondary sm:text-4xl">
                  Tech Stack
                </h2>
              </div>
              <p className="max-w-xl text-sm leading-6 text-secondary/70">
                The same assets, rearranged into a denser grid that works better
                for tablets.
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              {techCards.map((card) => (
                <button
                  key={card.key}
                  type="button"
                  onClick={() => openTechModal(card.key)}
                  className="group relative overflow-hidden rounded-[1.5rem] border border-edge-primary/70 bg-foreground/80 p-5 text-left shadow-[0_18px_45px_rgba(0,0,0,0.18)] transition hover:-translate-y-1 hover:border-highlight-primary/60"
                >
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${card.accent} opacity-80 transition group-hover:opacity-100`}
                  />
                  <div className="relative flex h-full flex-col gap-4">
                    <div className="flex items-center justify-between gap-3">
                      <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-edge-primary/70 bg-background/80 p-3 shadow-lg">
                        <Image
                          src={card.imageSrc}
                          alt={card.imageAlt}
                          width={56}
                          height={56}
                          className="h-full w-full object-contain"
                        />
                      </div>
                      <span className="rounded-full border border-edge-primary/70 bg-background/80 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.25em] text-secondary/70">
                        Open
                      </span>
                    </div>
                    <div className="space-y-2">
                      <h3 className="font-headline text-xl font-black text-secondary">
                        {card.title}
                      </h3>
                      <p className="text-sm leading-6 text-secondary/80">
                        {card.caption}
                      </p>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </section>

          <section id="tablet-projects" className="space-y-6 pb-8">
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.35em] text-highlight-primary/80 sm:text-[11px]">
                  Portfolio
                </p>
                <h2 className="mt-2 font-headline text-3xl font-black text-secondary sm:text-4xl">
                  {showProjects ? "All Projects" : "Featured Projects"}
                </h2>
              </div>
              <button
                type="button"
                onClick={() => setShowProjects((prev) => !prev)}
                className="rounded-full border border-edge-primary bg-foreground/75 px-4 py-2 text-sm font-semibold text-secondary transition hover:border-highlight-primary hover:text-highlight-primary sm:px-5 sm:py-3"
              >
                {showProjects ? "View Featured" : "View All"}
              </button>
            </div>

            {showProjects ? (
              <div className="grid gap-4 md:grid-cols-2">
                {projectCards.map((project, index) => (
                  <button
                    key={project.title}
                    type="button"
                    onClick={() => openProjectModal(index)}
                    className="group overflow-hidden rounded-[1.5rem] border border-edge-primary/70 bg-foreground/80 text-left shadow-[0_18px_45px_rgba(0,0,0,0.18)] transition hover:-translate-y-1 hover:border-highlight-primary/60"
                  >
                    <div className="relative">
                      <div
                        className={`absolute inset-0 bg-gradient-to-br ${projectAccentByIndex[index % projectAccentByIndex.length]} opacity-90 transition group-hover:opacity-100`}
                      />
                      <Image
                        src={project.imageUrl}
                        alt={project.title}
                        width={900}
                        height={540}
                        className="relative h-56 w-full object-cover object-top"
                      />
                    </div>

                    <div className="space-y-3 p-5">
                      <div className="flex items-center justify-between gap-3">
                        <div>
                          <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-highlight-primary/80">
                            {project.eyebrow}
                          </p>
                          <h3 className="mt-1 font-headline text-xl font-black text-secondary">
                            {project.title}
                          </h3>
                        </div>
                        <span className="rounded-full border border-edge-primary/70 bg-background/80 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.25em] text-secondary/70">
                          View
                        </span>
                      </div>
                      <p className="text-sm leading-6 text-secondary/80">
                        {project.synopsis}
                      </p>
                    </div>
                  </button>
                ))}
              </div>
            ) : (
              <div className="grid gap-4 xl:grid-cols-[1.2fr_0.8fr]">
                <button
                  type="button"
                  onClick={() => openProjectModal(1)}
                  className="group overflow-hidden rounded-[1.75rem] border border-edge-primary/70 bg-foreground/80 text-left shadow-[0_20px_50px_rgba(0,0,0,0.18)] transition hover:-translate-y-1 hover:border-highlight-primary/60"
                >
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-violet-400/25 via-fuchsia-400/10 to-transparent opacity-90 transition group-hover:opacity-100" />
                    <Image
                      src={projectCards[1].gifUrl}
                      alt={projectCards[1].title}
                      width={1100}
                      height={700}
                      className="relative h-[24rem] w-full object-cover object-top"
                    />
                  </div>
                  <div className="space-y-4 p-5 sm:p-6">
                    <div className="flex items-center justify-between gap-4">
                      <div>
                        <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-highlight-primary/80">
                          Featured project
                        </p>
                        <h3 className="mt-1 font-headline text-2xl font-black text-secondary sm:text-3xl">
                          {projectCards[1].title}
                        </h3>
                      </div>
                      <span className="rounded-full border border-edge-primary/70 bg-background/80 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.25em] text-secondary/70">
                        Open
                      </span>
                    </div>
                    <p className="text-sm leading-6 text-secondary/80 sm:text-[15px] sm:leading-7">
                      {projectCards[1].synopsis}
                    </p>
                  </div>
                </button>

                <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-1">
                  {[0, 2, 3, 4].map((projectIndex) => {
                    const project = projectCards[projectIndex];
                    return (
                      <button
                        key={project.title}
                        type="button"
                        onClick={() => openProjectModal(projectIndex)}
                        className="group grid grid-cols-[120px_1fr] overflow-hidden rounded-[1.35rem] border border-edge-primary/70 bg-foreground/80 text-left shadow-[0_18px_45px_rgba(0,0,0,0.18)] transition hover:-translate-y-1 hover:border-highlight-primary/60"
                      >
                        <div className="relative min-h-[9.5rem]">
                          <div
                            className={`absolute inset-0 bg-gradient-to-br ${project.accent} opacity-90 transition group-hover:opacity-100`}
                          />
                          <Image
                            src={project.imageUrl}
                            alt={project.title}
                            width={480}
                            height={420}
                            className="relative h-full w-full object-cover object-top"
                          />
                        </div>
                        <div className="space-y-2 p-4">
                          <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-highlight-primary/80">
                            {project.eyebrow}
                          </p>
                          <h3 className="font-headline text-lg font-black text-secondary">
                            {project.title}
                          </h3>
                          <p className="text-sm leading-6 text-secondary/80">
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
