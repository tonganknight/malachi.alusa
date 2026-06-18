import { HomeSynopsisEnum } from "@/app/types/HomeSynopsis";

export const HomeSynopsis = () => {
  return (
    <div className="pl-10">
      <p className="font-label text-secondary text-[20px]">
        {HomeSynopsisEnum.Synopsis}
      </p>
    </div>
  );
};
