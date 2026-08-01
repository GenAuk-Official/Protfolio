import { useEffect } from "react";

export function useTheme() {
  useEffect(() => {
    const root = document.documentElement;

    root.classList.remove("dark");
    root.classList.add("light");

    localStorage.setItem("genauk-theme", "light");
  }, []);

  return {
    theme: "light" as const,
    toggle: () => {},
  };
}