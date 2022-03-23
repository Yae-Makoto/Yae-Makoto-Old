import { useContext } from "react";
import { Theme } from "../services/Context/Theme";
import './Card.css';

export default function (props) {
    const { themes, theme } = useContext(Theme);
    return (
        <div className="card" onClick={props.onClick}>
            <div
                style={{ backgroundColor: themes[theme].color }}>
                {props.svg}
            </div>
            <div style={{ color: themes[theme].color }}>{props.text}</div>
        </div>
    );
}