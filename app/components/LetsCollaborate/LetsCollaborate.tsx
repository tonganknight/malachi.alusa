import { Dispatch, SetStateAction } from "react";
import { LetsCollaborateEnum } from "../../types/LetsCollaborateEnum";
import { ContactMeForm } from "../ContanctMeForm/ContactMeForm";
import { HomeSynopsis } from "../HomeSynopsis/HomeSynopsis";

interface LetsCollaborateProps {
  setShowContactMe: Dispatch<SetStateAction<boolean>>;
}

export const LetsCollaborate = ({ setShowContactMe }: LetsCollaborateProps) => {
  const triggerShowContactMe = () => {
    setShowContactMe((prev: boolean) => !prev);
  };
  return (
    <div className="flex flex-col bg-forground border-b-[1px] border-edge-primary">
      <div className="flex flex-col items-start justify-center py-8">
        <div
          className="text-highlight-primary text-[15px] self-end mr-3"
          onClick={triggerShowContactMe}
        >
          {"Home"}
        </div>
        <p className="font-label text-secondary pr-3 text-[35px] font-bold self-center">
          {LetsCollaborateEnum.Label}
        </p>
      </div>
      <HomeSynopsis content={LetsCollaborateEnum.Synopsis} />
      <ContactMeForm />
    </div>
  );
};
