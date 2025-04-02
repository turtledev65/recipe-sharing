"use client";

import { ChangeEvent, useCallback, useState } from "react";

type ThemeType = "system" | "light" | "dark";

const ThemeSelect = () => {
  const [theme, setTheme] = useState<ThemeType>("system");

  const handleChangeTheme = useCallback(
    (e: ChangeEvent<HTMLSelectElement>) => {
      const newTheme = e.target.value as ThemeType;
      switch (newTheme) {
        case "light":
          document.documentElement.classList.remove("dark");
          break;
        case "dark":
          document.documentElement.classList.add("dark");
          break;
        case "system":
        default:
          const prefersDark = window.matchMedia(
            "(prefers-color-scheme: dark)",
          ).matches;
          if (prefersDark) document.documentElement.classList.add("dark");
          else document.documentElement.classList.remove("dark");
          break;
      }
      setTheme(newTheme);
    },
    [setTheme],
  );

  return (
    <select
      value={theme}
      onChange={handleChangeTheme}
      className="rounded-md bg-gray-300 dark:bg-slate-950"
    >
      <option value="system">System</option>
      <option value="light">Light</option>
      <option value="dark">Dark</option>
    </select>
  );
};
export default ThemeSelect;
