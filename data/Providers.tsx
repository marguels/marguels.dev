"use client";
import { DataProvider, DataType } from "@/data/context/dataContext";
import CommandBarProvider from "@/data/CommandBarProvider";
import React from "react";
import { ThemeProvider } from "next-themes";

export function Providers({ children }: { children: React.ReactNode }) {
  const [data, setData] = React.useState<DataType>({
    metadata: [],
    graphData: { nodes: [], links: [] },
  });

  React.useEffect(() => {
    fetch("/api")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setData(data);
      });
  }, []);
  return (
    <DataProvider data={data}>
      <ThemeProvider>
        <CommandBarProvider>{children}</CommandBarProvider>
      </ThemeProvider>
    </DataProvider>
  );
}
