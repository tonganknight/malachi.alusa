import Image from "next/image";
import { Dispatch, SetStateAction } from "react";
import { Modal } from "../../Modal/Modal";
import { Tag } from "../../Tags/tags";

interface ProjectCardProps {
  showFeature: boolean;
  setShowFeature: Dispatch<SetStateAction<boolean>>;
  synopsis: string;
  tags?: string[];
  link?: string;
  featurePoints?: string[];
}

export const ProjectCard = ({
  showFeature,
  setShowFeature,
  synopsis,
  tags,
  link,
  featurePoints,
}: ProjectCardProps) => {
  const handleModalOpen = () => {
    setShowFeature(true);
  };

  return (
    <div className="flex flex-col justify-center items-center text-center mb-3">
      <Image
        src="/TestRide.png"
        alt="Image of Test Ride testing App"
        width={260}
        height={200}
        className="rounded-2xl border-l-[1px] border-r-[1px] border-t-[1px] border-edge-primary"
      />
      <div className=" flex flex-col bg-foreground border-edge-primary border-b-[1px] border-l-[1px] border-r-[1px] rounded-b-2xl justify-center w-[84%] mt-[-10] p-[12px]">
        <p className=" text-secondary text-[15px] break-words">
          Test Ride is automated playwright test writing application. That
          builds UI tests for HTML elements, and executes them. This automats
          basic testing for Websites.
        </p>
        <div className="flex flex-wrap flex-row justify-center mt-3">
          {tags?.map((tag, index) => (
            <Tag key={index} text={tag} />
          ))}
        </div>

        <button
          onClick={handleModalOpen}
          className="text-highlight-primary text-[15px] self-end mt-3"
        >
          View
        </button>
      </div>
      {showFeature ? (
        <Modal
          Header={"Test Ride"}
          ImageSrc={"/TestRideGIF.gif"}
          ImageAlt={"a Gif of the Test Ride App running"}
          showModal={showFeature}
          setShowModal={setShowFeature}
          synopsis={synopsis}
          points={featurePoints}
        />
      ) : null}
    </div>
  );
};
