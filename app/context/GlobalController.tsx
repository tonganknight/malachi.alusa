"use client";

import {
  createContext,
  useContext,
  useState,
  type Dispatch,
  type ReactNode,
  type SetStateAction,
} from "react";

interface GlobalState {
  showContactMe: boolean;
  showModal: boolean;
  showFeature: boolean;
  setShowContactMe: Dispatch<SetStateAction<boolean>>;
  setShowModal: Dispatch<SetStateAction<boolean>>;
  setShowFeature: Dispatch<SetStateAction<boolean>>;
}

const GlobalControllerContext = createContext<GlobalState | undefined>(
  undefined,
);

export const GlobalControllerProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [showContactMe, setShowContactMe] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [showFeature, setShowFeature] = useState(false);

  return (
    <GlobalControllerContext.Provider
      value={{
        showContactMe,
        setShowContactMe,
        showModal,
        setShowModal,
        showFeature,
        setShowFeature,
      }}
    >
      {children}
    </GlobalControllerContext.Provider>
  );
};

export const useGlobalController = (): GlobalState => {
  const context = useContext(GlobalControllerContext);
  if (!context) {
    throw new Error(
      "useGlobalController must be used inside a GlobalControllerProvider",
    );
  }
  return context;
};
