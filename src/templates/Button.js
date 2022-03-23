import { useContext, useEffect, useState } from "react";
import { Theme } from "../services/Context/Theme";
import "./Button.css";

export default function (props) {

    const children = props.children;
    const onClick = props.onClick;
    const className = props.className;
    const active = props.active === true ? true : false;
    const defaultActive = props.defaultActive;

    const { themes, theme } = useContext(Theme);
    const [bg, setBg] = useState('white');
    const [fg, setFg] = useState(themes[theme].color);
    const [isActive, setIsActive] = useState(defaultActive);

    useEffect(() => {
        if (isActive){
            setBg(themes[theme].color);
        }else{
            setFg(themes[theme].color);
        }
        
    }, [theme])

    return (
        <div className={`btn ${className ?? ""}`}
            style={{
                border: `3px solid ${themes[theme].color}`,
                fill: fg,
                color: fg,
                backgroundColor: bg,
                transition: 'all .3s ease-in-out',
                cursor: 'pointer'
            }}
            onMouseEnter={
                () => {
                    setBg(themes[theme].color);
                    setFg('white')
                }
            }
            onMouseLeave={
                () => {
                    if (!isActive) {
                        setFg(themes[theme].color);
                        setBg('white')
                    }
                }
            }
            onClick={() => {
                if (active) {
                    if (isActive) {
                        setFg(themes[theme].color);
                        setBg('white')
                    } else {
                        setBg(themes[theme].color);
                        setFg('white')
                    }
                }
                setIsActive(pre => !pre);
                onClick();
            }}
        >
            {children}
        </div>
    )
}