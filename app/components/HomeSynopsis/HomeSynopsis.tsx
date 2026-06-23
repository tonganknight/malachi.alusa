import { HomeSynopsisEnum } from "@/app/types/HomeSynopsis";

interface HomeSynopsisProps {
  content: string;
}

export const HomeSynopsis = ({ content }: HomeSynopsisProps) => {
  return (
    <div className="flex items start justify-start text-start pl-5 ">
      <p className="font-label text-secondary text-[20px]">{content}</p>
    </div>
  );
};
