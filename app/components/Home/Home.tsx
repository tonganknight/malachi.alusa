"use client";
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

export const Home = () => {
  const { showContactMe, setShowContactMe } = useGlobalController();

  return (
    <div className="flex min-h-screen min-w-0 flex-col">
      <NavBar />
      {showContactMe && <LetsCollaborate setShowContactMe={setShowContactMe} />}
      <HomeHeading />
      <HomeSynopsis content={HomeSynopsisEnum.Synopsis} />
      <LetsConnectButton />
      <SkillsOverview />
      <TechStack />
      <FeaturedProjectsSection />
    </div>
  );
};
