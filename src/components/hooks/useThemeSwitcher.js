import { useEffect, useState } from "react";

export default function useThemeSwitcher() {
  const [theme, setTheme] = useState("");
  const preferDarkQuery = "(prefers-color-scheme: dark)";

  useEffect(() => {
    const mediaQuery = window.matchMedia(preferDarkQuery);
    const userPreferenceTheme = window.localStorage.getItem("theme");

    if (userPreferenceTheme) {
      console.log("tema no local storage: ", userPreferenceTheme);

      let check = userPreferenceTheme === "dark" ? "dark" : "light";
      setTheme(check);

      check === "dark"
        ? document.documentElement.classList.add("dark")
        : document.documentElement.classList.remove("dark");
    }

    function handleChangePreferences() {
      let check = mediaQuery.matches ? "dark" : "light";
      setTheme(check);

      check === "dark"
        ? document.documentElement.classList.add("dark")
        : document.documentElement.classList.remove("dark");
    }

    mediaQuery.addEventListener("change", handleChangePreferences);

    return () => {
      mediaQuery.removeEventListener("change", handleChangePreferences);
    };
  }, []);

  useEffect(() => {
    if (theme === "dark") {
      window.localStorage.setItem("theme", "dark");
      document.documentElement.classList.add("dark");
    }

    if (theme === "light") {
      window.localStorage.setItem("theme", "light");
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  return [theme, setTheme];
}
