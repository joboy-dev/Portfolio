import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

export default function useTheme() {
    const context = useContext(ThemeContext)

    if (context === undefined) {
        throw new Error('useTheme hook cannot be used in this part of the application')
    }

    return context
}