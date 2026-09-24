"use client";
import { useEffect } from "react";
import { useGlobalController } from "@/app/context/GlobalController";
import { FeaturedProjectsSection } from "../FeaturedProjectsSection/FeaturedProjectsSection";
import { HomeHeading } from "../HomeHeading";
import { HomeSynopsis } from "../HomeSynopsis/HomeSynopsis";
import { LetsConnectButton } from "../LetsConnectButton/LetsConnectButton";
import { NavBar } from "../NavBar";
import { SkillsOverview } from "../SkillsOverview/SkillsOverview";
import { TechStack } from "../TechStack/TechStack";
import { LetsCollaborate } from "../LetsCollaborate/LetsCollaborate";
import { HomeSynopsisEnum } from "@/app/types/HomeSynopsis";
import { AllProjects } from "../AllProjects/AllProjects";
import { FeaturedProjectSectionEnum } from "@/app/types/FeaturedProjectSectionEnum";
import { ModalPacket } from "@/app/types/modalPackets";
import { HomeDesktop } from "./HomeDesktop";
import { HomeTablet } from "./HomeTablet";

export const Home = () => {
  const { showContactMe, setShowContactMe, showProjects, setShowProjects } =
    useGlobalController();

  useEffect(() => {
    if (!showContactMe) {
      return;
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [showContactMe]);

  const imageUrls = [
    "/NSP.png",
    "/TestRide.png",
    "/PeasAndThankYou.png",
    "/TaskMasterPro.png",
    "/GitItDone.png",
  ];

  const modalPacket: ModalPacket[] = [
    {
      imageUrl: "/NSP.gif",
      imageHeight: 400,
      imageAlt: "Image of the NSP website",
      synopsis:
        "Nature Sunshine Producuts is a supplement company that specializes in natural health products. The website was built using next.js and tailwind.css on the front end, and utilizes custom  headless CMS system using Optimizly. For over 2 years I worked on the front end of this website I implemented features, fixed bugs, and improving the user experience",
      title: "Nature Sunshine Products",
      featurePoints: ["TypeScript", "Next.js", "TailwindCSS", "Optimizly"],
    },
    {
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
    {
      imageUrl: "/PeasAndThankYouGIF.gif",
      imageHeight: 400,
      imageAlt: "Image of the Peas and Thank You website",
      synopsis:
        "Peas and Thank You is a website that focuses on healthy eating and lifestyle. It uses Edamon's generous API to call recipes, and uses a reobust health filter systm to allow uses to filter recipes fro specific health requirments.",
      title: "Peas and Thank You",
      featurePoints: ["TypeScript", "Next.js", "TailwindCSS"],
    },
    {
      imageUrl: "/TaskMasterProGIF.gif",
      imageHeight: 400,
      imageAlt: "Image of the Task Master Pro website",
      synopsis:
        "Task Master Pro is a project management tool that helps teams organize and track their tasks efficiently. It features a user-friendly interface that uses a drag and drop system to allow users to easily manage their tasks and projects. The website was built using React and Bootstrap, and is designed to be responsive and accessible on all devices.",
      title: "Task Master Pro",
      featurePoints: ["TypeScript", "React", "Bootstrap", "Node.js"],
    },
    {
      imageUrl: "/GitItDone.png",
      imageHeight: 400,
      imageAlt: "Image of the Git It Done website",
      synopsis:
        "Git It Done helps developers discover open issues across GitHub repositories so they can contribute quickly. It provides a focused interface for finding active repositories and jumping directly into issue lists.",
      title: "Git It Done",
      featurePoints: ["JavaScript", "GitHub API", "Bootstrap"],
    },
  ];

  const synopses = [
    FeaturedProjectSectionEnum.FeaturedProjectSynopsis,
    FeaturedProjectSectionEnum.FeaturedProjectSynopsis,
    FeaturedProjectSectionEnum.FeaturedProjectSynopsis,
    FeaturedProjectSectionEnum.FeaturedProjectSynopsis,
    FeaturedProjectSectionEnum.FeaturedProjectSynopsis,
  ];

  const titles = [
    "NSP",
    "TestRide",
    "PeasAndThankYou",
    "TaskMasterPro",
    "GitItDone",
  ];
  return (
    <div className="flex min-h-screen min-w-0 flex-col">
      {showContactMe && <LetsCollaborate setShowContactMe={setShowContactMe} />}
      <div className="mobile-home flex min-h-screen min-w-0 flex-col">
        <NavBar />
        <HomeHeading />
        <HomeSynopsis content={HomeSynopsisEnum.Synopsis} />
        <LetsConnectButton />
        <SkillsOverview />
        <TechStack />
        {showProjects ? (
          <AllProjects
            imagesUrls={imageUrls}
            Titles={titles}
            synopses={synopses}
            setShowProjects={setShowProjects}
            ModalPackets={modalPacket}
          />
        ) : (
          <FeaturedProjectsSection setShowProjects={setShowProjects} />
        )}
      </div>
      <div className="tablet-home hidden min-h-screen min-w-0 flex-col">
        <HomeTablet />
      </div>
      <div className="desktop-home hidden min-h-screen min-w-0 flex-col">
        <HomeDesktop />
      </div>
    </div>
  );
};
