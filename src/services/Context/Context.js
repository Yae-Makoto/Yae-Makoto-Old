
import { createContext, useState } from "react";
import { languageChange, languageInit } from "../Helper/LanguageManager";

export const Context = createContext();

export default function ContextProvider({ children }) {

    const [lang, setLang] = useState(languageInit());
    const changeLang = (bln) => {
        languageChange(bln, setLang);
    }

    const [contentTitle, setContentTitle] = useState("");
    const [contentTitleComplex, setContentTitleComplex] = useState("");

    const [markdownUrl, setMarkdownUrl] = useState("");
    const [mediaUrl, setMediaUrl] = useState("");
    return (
        <Context.Provider value={{
            lang,
            setLang,
            changeLang,
            contentTitle,
            setContentTitle,
            contentTitleComplex,
            setContentTitleComplex,
            markdownUrl, setMarkdownUrl,
            mediaUrl, setMediaUrl,
        }}>
            {children}
        </Context.Provider>
    );
}
