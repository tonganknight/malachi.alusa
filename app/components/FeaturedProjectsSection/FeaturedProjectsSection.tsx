"use client";

import { FeaturedProjectSectionEnum } from "@/app/types/FeaturedProjectSectionEnum";
import { ProjectCard } from "./ProjectCard/ProjectCard";
import { Dispatch, SetStateAction } from "react";

interface FeaturedProjectsSectionProps {
  setShowProjects: Dispatch<SetStateAction<boolean>>;
}

export const FeaturedProjectsSection = ({
  setShowProjects,
}: FeaturedProjectsSectionProps) => {
  const tagsToDisplay = [
    "Next.js",
    ".Net",
    "Playwright",
    "TypeScript",
    "TailwindCSS",
    "Node.js",
  ];
  return (
    <div className="flex flex-col ml-3">
      <div className="flex flex row justify-center items-center">
        <p className="font-label font-bold text-secondary text-[20px] mb-5">
          {FeaturedProjectSectionEnum.Label}
        </p>
        <a
          onClick={() => setShowProjects(true)}
          className="font-label text-highlight-primary text-[15px] mb-3 ml-5"
        >
          {FeaturedProjectSectionEnum.ShowAllLink}
        </a>
      </div>
      <ProjectCard
        synopsis={FeaturedProjectSectionEnum.FeaturedProjectSynopsis}
        tags={tagsToDisplay}
        link={FeaturedProjectSectionEnum.FeaturedProjectLink}
        // featurePoints={FeaturedProjectSectionEnum.FeaturedProjectFeaturePoints}
        imageHeight={350}
        imageUrl={"/TestRide.png"}
        gifUrl={"/TestRideGIF.gif"}
        modalPacket={{
          imageUrl: "/TestRideGIF.gif",
          synopsis: FeaturedProjectSectionEnum.FeaturedProjectSynopsis,
          title: "TestRide",
          featurePoints: undefined,
        }}
        title={"TestRide"}
      />
    </div>
  );
};
