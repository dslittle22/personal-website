"use client";

import { useState, useEffect } from "react";
import { Moon, Sun, System } from "./icons";
import Tooltip from "rc-tooltip";
import "rc-tooltip/assets/bootstrap.css";

export default function ThemeSwitcher({
  styles,
}: {
  styles: { readonly [key: string]: string };
}) {
  const [initialRender, setInitialRender] = useState(true);
  const [selected, setSelected] = useState<string | undefined>(undefined);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

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
        <Tooltip
          trigger={["hover"]}
          overlay={<span>Light mode</span>}
          placement="right"
          mouseEnterDelay={0.075}
        >
          <div
            onClick={setLightMode}
            className={selected == "light" ? styles.active : ""}
          >
            <Sun />
          </div>
        </Tooltip>
        <Tooltip
          trigger={["hover"]}
          overlay={<span>Dark mode</span>}
          mouseEnterDelay={0.075}
        >
          <div
            onClick={setDarkMode}
            className={selected == "dark" ? styles.active : ""}
          >
            <Moon />
          </div>
        </Tooltip>
        <Tooltip
          trigger={["hover"]}
          overlay={<span>System Preference</span>}
          mouseEnterDelay={0.075}
        >
          <div
            onClick={changeToOSPref}
            className={selected == "system" ? styles.active : ""}
          >
            <System />
          </div>
        </Tooltip>
      </div>
    </div>
  );
}
