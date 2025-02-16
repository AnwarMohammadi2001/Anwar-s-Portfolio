import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/components/theme-provider";
import { useState } from "react";

export function ModeToggle() {
  const { setTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <button
        className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition"
        aria-label="Toggle theme"
        onClick={() => setIsOpen(!isOpen)}
      >
        <Sun className="h-5 w-5 transition-all dark:hidden" />
        <Moon className="h-5 w-5 hidden transition-all dark:block" />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-36 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg shadow-lg transition-all">
          <button
            className="block w-full px-4 py-2 text-left text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-t-lg"
            onClick={() => {
              setTheme("light");
              setIsOpen(false);
            }}
          >
            ☀️ Light Mode
          </button>
          <button
            className="block w-full px-4 py-2 text-left text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-b-lg"
            onClick={() => {
              setTheme("dark");
              setIsOpen(false);
            }}
          >
            🌙 Dark Mode
          </button>
        </div>
      )}
    </div>
  );
}
