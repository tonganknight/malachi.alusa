import { TechStackEnum } from "@/app/types/TechStackEnums";
import { TechStackLabel } from "./TechStackLebels/TechStackLabel";

export const TechStack = () => {
  return (
    <div className="flex flex-col m-3 ">
      <p className="font-label text-secondary text-[20px] ml-2 mb-3">
        {TechStackEnum.Label}
      </p>
      <TechStackLabel label="Next.Js" strobe="bg-[#4cecff]" />
      <TechStackLabel label="C#" strobe="bg-[#58f58a]" />
      <TechStackLabel label="SQL" strobe="bg-[#3087ff]" />
    </div>
  );
};
