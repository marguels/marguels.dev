"use client";
import { Action, KBarProvider, useRegisterActions } from "kbar";
import { useRouter } from "next/navigation";
import React, { ReactNode, useEffect, useMemo, useState } from "react";
import { FaBook, FaGithub, FaHome, FaSearch } from "react-icons/fa";
import CommandBar from "../components/commandBar/CommandBar";
import { PostMetadata } from "@/interfaces/post";
import { useData } from "@/data/context/dataContext";

interface ActionProviderProps {
  actions: Action[];
}

interface CommandBarProviderProps {
  children: ReactNode;
}

const CommandBarProvider: React.FC<CommandBarProviderProps> = ({
  children,
}) => {
  const router = useRouter();
  const navigate = (url: string) => {
    router.push(url);
  };
  const [shouldRenderActionProvider, setShouldRenderActionProvider] =
    useState(false);

  const { metadata } = useData();

  const searchActions = useMemo(() => {
    if (!metadata) return null;

    return metadata.map((item) => {
      return {
        id: item.slug,
        parent: "digitalGardenAction",
        name: item.title,
        shortcut: [],
        section: "Digital garden",
        keywords: [item.title, item.slug].join(" "),
        perform: () => router.push(`/blog/${item.slug}`),
      };
    });
  }, [metadata]);

  useEffect(() => {
    if (searchActions && shouldRenderActionProvider === false) {
      setShouldRenderActionProvider(true);
    }
  }, [searchActions]);

  const actions: Action[] = [
    {
      id: "homeAction",
      name: "Home",
      shortcut: ["h"],
      keywords: "back",
      section: "Navigation",
      perform: () => navigate("/"),
      icon: <FaHome />,
    },
    {
      id: "blogAction",
      name: "Blog",
      shortcut: ["b"],
      keywords: "blog dots articles",
      section: "Navigation",
      icon: <FaBook />,
      perform: () => navigate("/blog"),
    },
    {
      id: "githubAction",
      name: "Github",
      shortcut: ["g"],
      keywords: "sourcecode",
      section: "Navigation",
      icon: <FaGithub />,
      perform: () => window.open("https://github.com/marguels", "_blank"),
    },
    {
      id: "digitalGardenAction",
      name: "Search through my notes",
      shortcut: ["?"],
      keywords: "search articles notes",
      section: "Digital garden",
      icon: <FaSearch />,
    },
  ];

  return (
    <KBarProvider actions={actions}>
      {children}
      <CommandBar />
      {searchActions && shouldRenderActionProvider && (
        <ActionProvider actions={searchActions} />
      )}
    </KBarProvider>
  );
};

const ActionProvider: React.FC<ActionProviderProps> = React.memo(
  ({ actions }) => {
    useRegisterActions(actions, [actions]);
    return null;
  }
);

export default CommandBarProvider;
