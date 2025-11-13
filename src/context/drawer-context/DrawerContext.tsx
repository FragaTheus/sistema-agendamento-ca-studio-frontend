"use client";

import { createContext, useContext, useState } from "react";

interface IDrawerContext {
  open: boolean;
  toogleDrawer: () => void;
}

const DrawerContext = createContext({} as IDrawerContext);

interface IDrawerContextProvider {
  children: React.ReactNode;
}

export const DrawerContextProvider: React.FC<IDrawerContextProvider> = ({
  children,
}) => {
  const [open, setOpen] = useState<boolean>(false);
  const toogleDrawer = () => {
    open === true ? setOpen(false) : setOpen(true);
  };
  return (
    <DrawerContext.Provider value={{ open, toogleDrawer }}>
      {children}
    </DrawerContext.Provider>
  );
};

export const useDrawerContext = () => {
  return useContext(DrawerContext);
};
