"use client";
import {
  KBarAnimator,
  KBarPortal,
  KBarPositioner,
  KBarResults,
  KBarSearch,
  useKBar,
  useMatches,
  ActionImpl,
  VisualState,
} from "kbar";
import React, { useEffect } from "react";
import styles from "./commandbar.module.css";

const CommandBar = () => {
  const { visualState } = useKBar((state) => state);

  return (
    <>
    {visualState !== VisualState.hidden && <div className={styles.backdrop}></div>}
    <KBarPortal>
      <KBarPositioner className={styles.positioner}>
        <KBarAnimator className={styles.kbarAnimator}>
          <div className={styles.kbarContent}>
            <KBarSearch placeholder="Search" className={styles.searchBar} />
            <div className={styles.kbarResults}>
              <RenderResults />
            </div>
          </div>
        </KBarAnimator>
      </KBarPositioner>
    </KBarPortal>
    </>
  );
};

const RenderResults = () => {
  const { results } = useMatches();

  return (
    <KBarResults
      items={results}
      onRender={({ item, active }) => {
        return typeof item === "string" ? (
            <div className={styles.actionCategoryWrapper}>
                <h2 className={styles.actionCategory}>{item} </h2>
            </div>
        ) : (
          <ResultItem action={item} active={active} />
        );
      }}
    />
  );
}

const ResultItem = React.forwardRef(function ResultItem(
  { action, active }: { action: ActionImpl; active: boolean },
  ref: React.Ref<HTMLDivElement>
) {
  return (
    <div
      ref={ref}
      className={`${styles.kbarResultItem} ${active ? styles.active : ""}`}
    >
      <header className={styles.actionContainer}>
        {action.icon}
        <div className={styles.actionItem}>
          <h1 className={styles.actionTitle}> {action.name} </h1>
        </div>
      </header>
      <div className="text-[15px] leading-none text-violet11 rounded flex justify-between items-center relative select-none outline-none hover:bg-violet4">
        {action.shortcut?.length ? (
          <div
            aria-hidden
            style={{ display: "grid", gridAutoFlow: "column", gap: "4px" }}
          >
            {action.shortcut.map((sc) => (
              <kbd
                key={sc}
                style={{
                  padding: "4px 6px",
                  background: "rgba(0 0 0 / .1)",
                  borderRadius: "4px",
                  fontSize: 14,
                }}
              >
                {sc}
              </kbd>
            ))}
          </div>
        ) : null}
      </div>
    </div>
  );
});

export default CommandBar;
