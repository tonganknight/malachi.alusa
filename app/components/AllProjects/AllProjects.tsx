"use client";
import { Dispatch, SetStateAction } from "react";
import { ProjectCard } from "../FeaturedProjectsSection/ProjectCard/ProjectCard";

interface AllProjectsProps {
  setShowProjects: Dispatch<SetStateAction<boolean>>;
  imagesUrls: string[];
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
  setShowProjects,
}: AllProjectsProps) => {
  return (
    <div className="flex flex-col ml-3">
      <div className="flex flex row justify-center items-center">
        <p className="font-label text-secondary text-[20px] mb-5">
          {"Projects"}
        </p>
        <a onClick={() => setShowProjects(false)}>Close</a>
      </div>
      {imagesUrls.map((imageUrl, index) => (
        <ProjectCard
          key={`${imageUrl}-${index}`}
          imageUrl={imageUrl}
          gifUrl={gifUrls ? gifUrls[index] : imageUrl}
          synopsis={synopses[index]}
          tags={tags}
          modalPacket={{
            imageUrl: imageUrl,
            synopsis: synopses[index],
            title: Titles[index],
            featurePoints: features ? features[index] : undefined,
          }}
          title={Titles[index]}
        />
      ))}
    </div>
  );
};
