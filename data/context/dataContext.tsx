"use client";
import { ObsidianLinks, PostMetadata } from "@/interfaces/post";
import React, { ReactNode } from "react";

const DataContext = React.createContext<DataType | undefined>(undefined);

export type DataType = {
  metadata: PostMetadata[];
  graphData: ObsidianLinks;
};

type DataProviderProps = {
  children: ReactNode;
  data: DataType;
};


const DataProvider = ({ children, data }: DataProviderProps) => {
  return <DataContext.Provider value={data}>{children}</DataContext.Provider>;
};

const useData = (): DataType => {
  const context = React.useContext(DataContext);
  if (context === undefined) {
    throw new Error("useData must be used within a DataProvider");
  }

  return context;
};

export { DataProvider, useData };
