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
    <div className="flex flex-col m-3 ">
      <p className="font-label text-secondary text-[20px] ml-2 mb-3">
        {TechStackEnum.Label}
      </p>
      <button type="button" onClick={() => setShowNextJsModal(true)}>
        <TechStackLabel label="Next.Js" strobe="bg-[#4cecff]" />
      </button>
      <button type="button" onClick={() => setShowCSharpModal(true)}>
        <TechStackLabel label="C#" strobe="bg-[#58f58a]" />
      </button>
      <button type="button" onClick={() => setShowSqlModal(true)}>
        <TechStackLabel label="SQL" strobe="bg-[#3087ff]" />
      </button>

      {showNextJsModal && (
        <Modal
          Header={"Next.Js"}
          ImageSrc={""}
          ImageAlt={"Next.Js"}
          showModal={showNextJsModal}
          setShowModal={setShowNextJsModal}
        />
      )}

      {showCSharpModal && (
        <Modal
          Header={"C#"}
          ImageSrc={""}
          ImageAlt={"C#"}
          showModal={showCSharpModal}
          setShowModal={setShowCSharpModal}
        />
      )}

      {showSqlModal && (
        <Modal
          Header={"SQL"}
          ImageSrc={""}
          ImageAlt={"SQL"}
          showModal={showSqlModal}
          setShowModal={setShowSqlModal}
        />
      )}
    </div>
  );
};
