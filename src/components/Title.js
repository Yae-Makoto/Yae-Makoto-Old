import { Popover } from "antd";
import { useContext } from "react";
import { Context } from "../services/Context/Context";
import { Theme } from "../services/Context/Theme";



export default function () {

    const { lang, contentTitle } = useContext(Context);
    const { themes, theme } = useContext(Theme);

    return (
        <Popover content={
            <div style={{ color: themes[theme].color }}>
                {contentTitle[lang]}
            </div>
        } trigger="hover" placement="bottom">
            <div style={{ color: themes[theme].color }}>
                {contentTitle[lang]}
            </div>
        </Popover>
    );
}