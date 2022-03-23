import { useContext } from "react";
import Menu from "../components/Menu";
import { Theme } from "../services/Context/Theme";
import { useFetch, useFetchObject } from "../services/Hooks/useFetch";


function generateRandomSvg() {
    const pointNum = 6;

    var svg = `
    <svg width="100" height="100" xmlns="http://www.w3.org/2000/svg">
        <path d="M ${randomInt(1, 99)} ${randomInt(1, 99)}`

    for (let i = 0; i < pointNum; i++) {
        svg += `L ${randomInt(1, 99)} ${randomInt(1, 99)}`
    }

    svg += `"/>
    // </svg>`
    return svg;
}

function randomInt(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
}


export default function () {
    const { themes, theme } = useContext(Theme);

    return (
        <>
            <div style={{ fill: themes[theme].color }} dangerouslySetInnerHTML={{ __html: generateRandomSvg() }}></div>

        </>
    )
}

