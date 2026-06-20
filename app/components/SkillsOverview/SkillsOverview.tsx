import { Disciplines } from "./Disciplines/Disciplines";
import { YearsOfExp } from "./YearsOfExp/YearsOfExp";

export const SkillsOverview = () => {
  return (
    <div className="flex flex-col items-start justify-center py-8">
      <div className="flex flex-row">
        <YearsOfExp />
      </div>
      <div className="flex flex-row">
        <Disciplines />
      </div>
    </div>
  );
};
