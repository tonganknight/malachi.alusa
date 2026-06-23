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
  setShowContactMe: Dispatch<SetStateAction<boolean>>;
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

  return (
    <GlobalControllerContext.Provider
      value={{ showContactMe, setShowContactMe }}
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
