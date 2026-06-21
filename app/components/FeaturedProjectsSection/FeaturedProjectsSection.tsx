import { FeaturedProjectSectionEnum } from "@/app/types/FeaturedProjectSectionEnum";
import { ProjectCard } from "./ProjectCard/ProjectCard";

export const FeaturedProjectsSection = () => {
  return (
    <div className="flex flex-col ml-3">
      <div className="flex flex row justify-between items-center mb-3">
        <p className="font-label text-secondary text-[20px]">
          {FeaturedProjectSectionEnum.Label}
        </p>
        <a className="font-label text-highlight-primary text-[20px] mr-3">
          {FeaturedProjectSectionEnum.ShowAllLink}
        </a>
      </div>
      <ProjectCard />
    </div>
  );
};
