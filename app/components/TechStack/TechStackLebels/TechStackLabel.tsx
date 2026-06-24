import { ButtonStrobe } from "./ButtonStrobe/ButtonStrobe";

interface TechStackLabelProps {
  label: string;
  strobe: string;
}

export const TechStackLabel = ({ label, strobe }: TechStackLabelProps) => {
  return (
    <div className="flex flex-row bg-foreground border-[1px] border-edge-primary items-center rounded-2xl mb-3 p-1 w-[50%]">
      <ButtonStrobe glowClassName={strobe} />
      <p className="text-lg font-label font-bold text-highlight-primary">
        {label}
      </p>
    </div>
  );
};
