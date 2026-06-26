"use client";
import Image from "next/image";
interface ModalProps {
  Header: string;
  ImageSrc: string;
  ImageAlt: string;
  showModal: boolean;
  setShowModal: (value: boolean) => void;
  synopsis?: string;
  techStack?: string[];
  link?: string;
  points?: string[];
  imageWidth?: number;
  imageHeight?: number;
  demo?: boolean;
}

export const Modal = ({
  Header,
  ImageSrc,
  ImageAlt,
  synopsis,
  techStack,
  link,
  points,
  showModal,
  setShowModal,
  imageWidth,
  imageHeight,
  demo,
}: ModalProps) => {
  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <dialog
      open={showModal}
      className="modal"
      onClose={handleCloseModal}
      onCancel={handleCloseModal}
    >
      <div className="modal-box flex max-h-[85vh] flex-col items-center overflow-y-auto bg-foreground border-[1px] border-edge-primary text-secondary">
        <button
          type="button"
          className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
          onClick={handleCloseModal}
        >
          ✕
        </button>
        <h3 className="font-bold font-label text-[20px] py-3">{Header}</h3>
        <Image
          src={ImageSrc}
          alt={ImageAlt}
          width={imageWidth ?? 300}
          height={imageHeight ?? 3200}
          className="rounded-2xl border-[1px] border-edge-primary"
        />
        <p className="my-3">{synopsis}</p>
        {points ? (
          <div className="flex flex-col justify-center items-center mt-3">
            <p className="font-bold font-label text-[25px] text-secondary">
              Features:
            </p>
            <ul className="my-3 list-disc list-inside">
              {points.map((point, index) => (
                <li
                  key={index}
                  className="text-secondary text-[15px] break-words"
                >
                  {point}
                </li>
              ))}
            </ul>
          </div>
        ) : null}
        {demo ? (
          <a
            href={link ?? "#"}
            className=" flex flex-row items-center text-highlight-primary font-bold text-[15px] self-end mt-3"
          >
            Demo
            <Image
              src="/rightBlueArrowpng.png"
              alt="Github Logo"
              width={30}
              height={30}
            />
          </a>
        ) : null}
      </div>
    </dialog>
  );
};
