import { HomeHeadingEnum } from "../../types/HomeHeadingEnums";
export const HomeHeading = () => {
  return (
    <div className="flex flex-col items-start justify-center py-8">
      <div className="flex flex-row pl-5">
        <p className="font-label text-secondary pr-3 text-[35px] font-bold">
          {HomeHeadingEnum.Building}
        </p>
        <p className="font-label text-[35px] font-bold text-highlight-primary">
          {HomeHeadingEnum.Digital}
        </p>
      </div>
      <p className=" pl-5 font-label text-[35px] font-bold text-highlight-primary">
        {HomeHeadingEnum.Excellence}
      </p>
    </div>
  );
};
