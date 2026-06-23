import { FeaturedProjectSectionEnum } from "@/app/types/FeaturedProjectSectionEnum";
import { ProjectCard } from "./ProjectCard/ProjectCard";

export const FeaturedProjectsSection = () => {
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
      <ProjectCard />
    </div>
  );
};
