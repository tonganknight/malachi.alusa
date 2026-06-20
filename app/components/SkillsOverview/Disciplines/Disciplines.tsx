import { Discipline } from "@/app/types/DisciplinesEnums";
import Image from "next/image";

export const Disciplines = () => {
  return (
    <div className="flex flex-col p-3 bg-foreground border-[1px] border-edge-primary rounded-lg mx-3">
      <div className="flex flex-row">
        <p className="text-md font-bold text-highlight-primary pr-2">
          {Discipline.FRONTEND}
        </p>
        <p className="text-md font-bold text-highlight-primary pr-2">
          {Discipline.BACKEND}
        </p>
        <p className="text-md font-bold text-highlight-primary">
          {Discipline.DATABASE}
        </p>
      </div>
      <div className="flex flex-row items-start justify-start">
        <p className=" font-label text-secondary text-[20px] mt-1">
          Multi-Discipline
        </p>
        <Image src="/check.png" alt="Frontend" width={50} height={50} />
      </div>
    </div>
  );
};
