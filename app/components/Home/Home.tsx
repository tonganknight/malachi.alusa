"use client";
import { SetStateAction, useEffect } from "react";
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
    "/NSP.gif",
    "/TestRide.png",
    "/PeasAndThankYou.png",
    "/TaskMasterPro.png",
    "/GitItDone.png",
  ];

  const synopses = [
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
      <NavBar />
      {showContactMe && <LetsCollaborate setShowContactMe={setShowContactMe} />}
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
        />
      ) : (
        <FeaturedProjectsSection setShowProjects={setShowProjects} />
      )}
    </div>
  );
};
