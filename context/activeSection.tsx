"use client"

import React from 'react'
import { createContext, useContext, useState } from 'react';

type ActiveSectionContextType = {
  sectionInView: string;
  setSectionInView: React.Dispatch<React.SetStateAction<string>>;
};

export const activeSectionContext = createContext<ActiveSectionContextType | null>(null);


interface activeSectionProps {
  children: React.ReactNode
}


const ActiveSection: React.FC<activeSectionProps> = ({children}) => {
  const [sectionInView, setSectionInView] = useState<string>("Home")
  return (
    <activeSectionContext.Provider value={{sectionInView , setSectionInView}}>
    {children}
    </activeSectionContext.Provider>
  )
}

export default ActiveSection