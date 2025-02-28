"use client";

import { createContext, useState, useEffect, useContext } from "react";
import type { ReactNode } from "react";

interface ThemeContextType {
	isDark: boolean;
	toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

interface ThemeProviderProps {
	children: ReactNode;
}

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
	const [isDark, setIsDark] = useState<boolean>(false);

	useEffect(() => {
		const savedTheme = localStorage.getItem("theme");
		if (savedTheme === "Dark") {
			setIsDark(true);
			document.documentElement.setAttribute("data-theme", "dark");
		} else {
			setIsDark(false);
			document.documentElement.setAttribute("data-theme", "light");
		}
	}, []);

	const toggleTheme = () => {
		if (isDark) {
			document.documentElement.setAttribute("data-theme", "light");
			localStorage.setItem("theme", "light");
		} else {
			document.documentElement.setAttribute("data-theme", "dark");
			localStorage.setItem("theme", "Dark");
		}
		setIsDark(!isDark);
	};

	return (
		<ThemeContext.Provider value={{ isDark, toggleTheme }}>
			{children}
		</ThemeContext.Provider>
	);
};

export const useTheme = () => {
	const context = useContext(ThemeContext);
	if (!context) {
		throw new Error("useTheme must be used within a ThemeProvider");
	}
	return context;
};
