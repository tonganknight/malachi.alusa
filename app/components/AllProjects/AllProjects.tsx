"use client";
import { Dispatch, SetStateAction } from "react";
import { ProjectCard } from "../FeaturedProjectsSection/ProjectCard/ProjectCard";
import { AllProjectsEnum } from "@/app/types/AllProjects";
import { ModalPacket } from "@/app/types/modalPackets";

interface AllProjectsProps {
  setShowProjects: Dispatch<SetStateAction<boolean>>;
  imagesUrls: string[];
  ModalPackets: ModalPacket[];
  gifUrls?: string[];
  Titles: string[];
  synopses: string[];
  features?: string[];
  demo?: boolean;
  demoUrls?: string[];
  tags?: string[];
}

export const AllProjects = ({
  imagesUrls,
  gifUrls,
  Titles,
  synopses,
  features,
  demo,
  demoUrls,
  tags,
  ModalPackets,
  setShowProjects,
}: AllProjectsProps) => {
  return (
    <div className="flex flex-col ml-3 justify-center items-center">
      <div className="flex flex row justify-center items-center">
        <p className="font-label font-bold text-secondary text-[20px] mb-5 mr-5">
          {AllProjectsEnum.Title}
        </p>
        <a
          className="font-label text-highlight-primary text-[15px] mb-3"
          onClick={() => setShowProjects(false)}
        >
          {AllProjectsEnum.Link}
        </a>
      </div>
      {imagesUrls.map((imageUrl, index) => (
        <ProjectCard
          key={`${imageUrl}-${index}`}
          imageUrl={imageUrl}
          gifUrl={gifUrls ? gifUrls[index] : imageUrl}
          synopsis={synopses[index]}
          imageHeight={200}
          imageWidth={300}
          tags={tags}
          modalPacket={ModalPackets[index]}
        />
      ))}
    </div>
  );
};
