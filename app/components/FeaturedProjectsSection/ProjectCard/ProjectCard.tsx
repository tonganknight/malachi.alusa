import Image from "next/image";
import { useState } from "react";
import { Modal } from "../../Modal/Modal";
import { Tag } from "../../Tags/tags";

interface ProjectCardProps {
  synopsis: string;
  title: string;
  modalPacket: {
    imageUrl: string;
    imageAlt?: string;
    imageWidth?: number;
    imageHeight?: number;
    synopsis: string;
    title: string;
    featurePoints?: string;
  };
  tags?: string[];
  link?: string;
  imageUrl: string;
  gifUrl?: string;
  featurePoints?: string;
  imageHeight?: number;
  imageWidth?: number;
}

export const ProjectCard = ({
  synopsis,
  tags,
  imageUrl,
  gifUrl,
  link,
  featurePoints,
  modalPacket,
  title,
  imageHeight,
  imageWidth,
}: ProjectCardProps) => {
  const [showModal, setShowModal] = useState(false);

  const handleModalOpen = () => {
    setShowModal(true);
  };

  return (
    <div className="mb-3 flex flex-col items-center text-center">
      <div className="flex w-full max-w-[300px] flex-col items-stretch mr-3">
        <h2 className="font-label text-secondary text-[20px] py-3">
          {modalPacket.title}
        </h2>
        <Image
          style={{ height: imageHeight ?? 400 }}
          src={imageUrl}
          alt="Image of Test Ride testing App"
          width={imageWidth ?? 300}
          height={imageHeight ?? 300}
          className={`w-full rounded-2xl border-l-[1px] border-r-[1px] border-t-[1px] border-edge-primary`}
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
      <Modal
        Header={modalPacket.title || title}
        ImageSrc={(gifUrl ?? modalPacket.imageUrl) || imageUrl}
        ImageAlt={`a preview of ${modalPacket.title || title}`}
        showModal={showModal}
        setShowModal={setShowModal}
        synopsis={modalPacket.synopsis || synopsis}
        imageHeight={modalPacket.imageHeight || 300}
        imageWidth={modalPacket.imageWidth || 300}
      />
    </div>
  );
};
