"use client";
import {
  Action,
  KBarProvider,
} from "kbar";
import { useRouter } from "next/navigation";
import React from "react";
import { FaBook, FaGithub, FaHome, FaSearch } from "react-icons/fa";
import InternalCommand from "./InternalCommand";

export default function CommandBar({
  children,

}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const navigate = (url: string) => {
    router.push(url);
  };

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
      shortcut: ["g", "b"],
      keywords: "blog dots articles",
      section: "Navigation",
      icon: <FaBook />,
      perform: () => navigate("/blog"),
    },
    {
      id: "githubAction",
      name: "Github",
      shortcut: ["g", "h"],
      keywords: "sourcecode",
      section: "Navigation",
      icon: <FaGithub className="w-6 h-6 mx-3" />,
      perform: () => window.open("https://github.com/marguels", "_blank"),
    },
    {
      id: "digitalGardenAction",
      name: "Search through my notes",
      shortcut: ["?"],
      keywords: "search articles notes",
      section: "Digital garden",
      icon: <FaSearch className="w-6 h-6 mx-3" />,
    },
  ];

  return (
    <KBarProvider actions={actions}>
      {children}
      <InternalCommand />
    </KBarProvider>
  );
}


