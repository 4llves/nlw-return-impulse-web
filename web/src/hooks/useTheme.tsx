import { useContext, createContext, useState, useEffect, ReactNode } from "react";

interface ThemeProviderProps {
  children: ReactNode;
}

interface ThemeContextProps {
  theme: string;
  setTheme: (theme: string) => void;
}

const ThemeContext = createContext<ThemeContextProps>(
  {} as ThemeContextProps
);

export default function ThemeContextProvider({ children }: ThemeProviderProps) {
  const [theme, setTheme] = useState(localStorage.getItem('theme') !== "dark" ? "light" : "dark")

  useEffect(() => {
    const root = window.document.documentElement

    const removedOldTheme = theme === "dark" ? "light" : "dark"

    root.classList.remove(removedOldTheme);
    root.classList.add(theme);
    localStorage.setItem("theme", theme)
  }, [theme])

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  )

}

export function useTheme() {
  return useContext(ThemeContext)
}