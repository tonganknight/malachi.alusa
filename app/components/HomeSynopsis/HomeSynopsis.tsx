import { HomeSynopsisEnum } from "@/app/types/HomeSynopsis";

export const HomeSynopsis = () => {
  return (
    <div className="flex items start justify-start text-start pl-5 ">
      <p className="font-label text-secondary text-[20px]">
        {HomeSynopsisEnum.Synopsis}
      </p>
    </div>
  );
};
