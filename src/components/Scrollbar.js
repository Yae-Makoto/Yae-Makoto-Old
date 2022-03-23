import { useContext } from "react";
import { Theme } from "../services/Context/Theme";

export default function () {

    const {themes,theme} = useContext(Theme);

    const style = `
        <style>
            * {
                scrollbar-width: 10px;
                scrollbar-color: ${themes[theme].color}77 white;
            }

            /* Chrome, Edge, and Safari */
            *::-webkit-scrollbar {
                width: 10px;
            }

            *::-webkit-scrollbar-track {
                background: white;
            }

            *::-webkit-scrollbar-thumb {
                background-color: ${themes[theme].color}77;
                border-radius: 10px;
                border: 2px solid white;
            }
        </style>
    `

    return (
        <div id="scrollbar-style" dangerouslySetInnerHTML={{ __html: style }}/>
    );
}