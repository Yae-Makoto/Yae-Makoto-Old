
import { createContext, useState } from "react";
import themeConfig from '../../config/theme.json';
import { themeChange, themeInit } from "../Helper/CacheManager";

export const Theme = createContext();

export default function ThemeProvider({ children }) {

    const [themes] = useState(themeConfig);
    const [theme, setTheme] = useState(themeInit());

    const changeTheme = (i) => {
        setTheme(i);
        themeChange(i);
    }

    const getThemeColor = () => {
        return themes[theme].color;
    }

    const getThemeName = () => {
        return themes[theme].name;
    }

    return (
        <Theme.Provider value={{
            themes,
            theme,
            changeTheme,
            setTheme,
            getThemeColor,
            getThemeName
        }}>
            {children}
        </Theme.Provider>
    );
}
