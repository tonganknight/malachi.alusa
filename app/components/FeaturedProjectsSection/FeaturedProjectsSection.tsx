"use client";

import { FeaturedProjectSectionEnum } from "@/app/types/FeaturedProjectSectionEnum";
import { ProjectCard } from "./ProjectCard/ProjectCard";
import { useState } from "react";

export const FeaturedProjectsSection = () => {
  const [showFeature, setShowFeature] = useState(false);

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
      <div className="flex flex row justify-between items-center">
        <p className="font-label text-secondary text-[20px] mb-5">
          {FeaturedProjectSectionEnum.Label}
        </p>
        <a className="font-label text-highlight-primary text-[15px] mr-3 mb-3">
          {FeaturedProjectSectionEnum.ShowAllLink}
        </a>
      </div>
      <ProjectCard
        showFeature={showFeature}
        setShowFeature={setShowFeature}
        synopsis={FeaturedProjectSectionEnum.FeaturedProjectSynopsis}
        tags={tagsToDisplay}
        link={FeaturedProjectSectionEnum.FeaturedProjectLink}
        featurePoints={FeaturedProjectSectionEnum.FeaturedProjectFeaturePoints}
      />
    </div>
  );
};
