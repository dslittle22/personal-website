"use client";

import { useState, useEffect } from "react";
import { Moon, Sun, System } from "./icons";

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
        <div
          onClick={setLightMode}
          className={selected == "light" ? styles.active : ""}
        >
          <Sun />
        </div>
        <div
          onClick={setDarkMode}
          className={selected == "dark" ? styles.active : ""}
        >
          <Moon />
        </div>
        <div
          onClick={changeToOSPref}
          className={selected == "system" ? styles.active : ""}
        >
          <System />
        </div>
      </div>
    </div>
  );
}
