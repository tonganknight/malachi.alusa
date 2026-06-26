import { YearsOfExpEnum } from "@/app/types/YearsOfExpEnum";
export const YearsOfExp = () => {
  return (
    <div className="flex flex-col bg-foreground border-[1px] border-edge-primary justify-center items-center rounded-lg p-5 m-3">
      <p className="text-lg font-label font-bold text-highlight-primary">
        {YearsOfExpEnum.Value}
      </p>
      <p className=" font-label text-secondary text-[20px] ">
        {YearsOfExpEnum.Label}
      </p>
    </div>
  );
};
