import { Sun, Moon } from "phosphor-react";
import { useTheme } from "../hooks/useTheme";

export function ThemeButton() {
  const { theme, setTheme } = useTheme()
  return (
    <>
      <div className="flex justify-end items-center p-8">
        {
          theme === "light" ? (
            <Sun size={30} className="cursor-pointer text-yellow-500" weight="bold" onClick={() => setTheme("dark")} />
          ) : (
            <Moon size={30} className="cursor-pointer text-[#e3e3e3]" weight="bold" onClick={() => setTheme("light")} />
          )
        }
      </div>
    </>
  )
}