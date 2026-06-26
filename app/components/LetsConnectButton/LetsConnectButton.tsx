"use client";

import { useGlobalController } from "@/app/context/GlobalController";

export const LetsConnectButton = () => {
  const { setShowContactMe } = useGlobalController();
  const openContactMe = () => {
    setShowContactMe(true);
  };
  return (
    <div className="flex justify-center items-center">
      <button
        className="ml-5 mt-5 w-[60%] text-white font-label py-2 px-4 rounded bg-[linear-gradient(135deg,#8b5cf6,#7c3aed)]"
        onClick={openContactMe}
      >
        Let's Connect
      </button>
    </div>
  );
};
