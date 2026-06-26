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
    <div className="mb-3 flex flex-col items-center text-center">
      <div className="flex w-full max-w-[300px] flex-col items-stretch mr-3">
        <Image
          src="/TestRide.png"
          alt="Image of Test Ride testing App"
          width={300}
          height={250}
          className="w-full rounded-2xl border-l-[1px] border-r-[1px] border-t-[1px] border-edge-primary"
        />
        <div className="-mt-[10px] flex w-full flex-col justify-center rounded-b-2xl border-b-[1px] border-l-[1px] border-r-[1px] border-edge-primary bg-foreground p-[12px]">
          <p className="text-[15px] break-words text-secondary">
            Test Ride is automated playwright test writing application. That
            builds UI tests for HTML elements, and executes them. This automats
            basic testing for Websites.
          </p>
          <div className="mt-3 flex flex-wrap flex-row justify-center">
            {tags?.map((tag, index) => (
              <Tag key={index} text={tag} />
            ))}
          </div>

          <button
            onClick={handleModalOpen}
            className="mt-3 self-end text-[15px] text-highlight-primary"
          >
            View
          </button>
        </div>
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
