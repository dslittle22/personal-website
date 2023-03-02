"use client";

import { useState, useEffect } from "react";
import { Moon, Sun, System } from "./icons";
import { Tooltip } from "react-tooltip";

export default function ThemeSwitcher({
  styles,
}: {
  styles: { readonly [key: string]: string };
}) {
  const [initialRender, setInitialRender] = useState(true);
  const [selected, setSelected] = useState<string | undefined>(undefined);

  function osPrefListener(event: MediaQueryListEvent) {
    const newTheme = event.matches ? "dark" : "light";
    if (!window.localStorage.getItem("theme")) {
      document.body.dataset.theme = newTheme;
    }
  }

  function changeToOSPref() {
    if (
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
      document.body.dataset.theme = "dark";
    } else {
      document.body.dataset.theme = "light";
    }
    window.localStorage.setItem("theme", "");
    setSelected("system");
  }

  function setLightMode() {
    document.body.dataset.theme = "light";
    window.localStorage.setItem("theme", "light");
    setSelected("light");
  }

  function setDarkMode() {
    document.body.dataset.theme = "dark";
    window.localStorage.setItem("theme", "dark");
    setSelected("dark");
  }

  useEffect(() => {
    if (!initialRender) return;
    setInitialRender(false);

    const initialTheme = document.body.dataset.theme;
    if (!window.localStorage.getItem("theme")) {
      changeToOSPref();
    } else {
      setSelected(document.body.dataset.theme);
    }

    window
      .matchMedia("(prefers-color-scheme: dark)")
      .addEventListener("change", osPrefListener);
    return () => {
      window
        .matchMedia("(prefers-color-scheme: dark)")
        .removeEventListener("change", osPrefListener);
    };
  }, [initialRender]);

  return (
    <div className={styles.themeSwitcherWrapper}>
      <div className={styles.themeSwitcher}>
        <div
          data-tooltip-id="light"
          data-tooltip-content="Light mode"
          data-tooltip-delay-show={250}
          data-tooltip-place="right"
          onClick={setLightMode}
          className={selected == "light" ? styles.active : ""}
        >
          <Sun />
        </div>
        <div
          data-tooltip-id="dark"
          data-tooltip-content="Dark mode"
          data-tooltip-delay-show={250}
          data-tooltip-place="right"
          onClick={setDarkMode}
          className={selected == "dark" ? styles.active : ""}
        >
          <Moon />
        </div>
        <div
          data-tooltip-id="system"
          data-tooltip-content="OS preference"
          data-tooltip-delay-show={250}
          data-tooltip-place="right"
          onClick={changeToOSPref}
          className={selected == "system" ? styles.active : ""}
        >
          <System />
        </div>
      </div>
      <Tooltip id="light" />
      <Tooltip id="dark" />
      <Tooltip id="system" />
    </div>
  );
}
