"use client";

import { TechStackEnum } from "@/app/types/TechStackEnums";
import { TechStackLabel } from "./TechStackLebels/TechStackLabel";
import { useState } from "react";
import { Modal } from "../Modal/Modal";

export const TechStack = () => {
  const [showNextJsModal, setShowNextJsModal] = useState(false);
  const [showCSharpModal, setShowCSharpModal] = useState(false);
  const [showSqlModal, setShowSqlModal] = useState(false);

  return (
    <div className="flex flex-col m-3 justify-center items-center w-[100%]">
      <p className="font-label text-secondary text-[20px] ml-2 mb-3">
        {TechStackEnum.Label}
      </p>
      <button
        className="w-[60%]"
        type="button"
        onClick={() => setShowNextJsModal(true)}
      >
        <TechStackLabel label="Next.Js" strobe="bg-[#4cecff]" />
      </button>
      <button
        className="w-[60%]"
        type="button"
        onClick={() => setShowCSharpModal(true)}
      >
        <TechStackLabel label="C#" strobe="bg-[#58f58a]" />
      </button>
      <button
        className="w-[60%]"
        type="button"
        onClick={() => setShowSqlModal(true)}
      >
        <TechStackLabel label="SQL" strobe="bg-[#3087ff]" />
      </button>

      {showNextJsModal && (
        <Modal
          Header={"Next.Js"}
          ImageSrc={"/Next.png"}
          ImageAlt={"Next.Js"}
          showModal={showNextJsModal}
          setShowModal={setShowNextJsModal}
          synopsis={TechStackEnum.NextModalContent}
        />
      )}

      {showCSharpModal && (
        <Modal
          Header={"C#"}
          ImageSrc={"/CSharp.png"}
          ImageAlt={"C#"}
          showModal={showCSharpModal}
          setShowModal={setShowCSharpModal}
          synopsis={TechStackEnum.CSharpModalContent}
        />
      )}

      {showSqlModal && (
        <Modal
          Header={"SQL"}
          ImageSrc={"/sql.png"}
          ImageAlt={"Image SQL"}
          showModal={showSqlModal}
          setShowModal={setShowSqlModal}
          synopsis={TechStackEnum.SQLModalContent}
        />
      )}
    </div>
  );
};
