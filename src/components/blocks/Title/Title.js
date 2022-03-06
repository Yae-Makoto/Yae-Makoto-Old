import { Popover } from "antd";
import { useContext } from "react";
import { Context } from "../../../services/Context/Context";

export function TitleSimple(props) {
    const { lang,
        setLang,
        changeLang, contentTitle,
        setContentTitle } = useContext(Context);
    return (
        <Popover content={contentTitle} trigger="hover" placement="bottom">
            <div>{contentTitle}</div>
        </Popover>
    )
}

export function TitleLang(props) {

    const { lang,
        setLang,
        changeLang, contentTitle,
        setContentTitle,
        contentTitleComplex,
        setContentTitleComplex } = useContext(Context);
        console.log(contentTitleComplex)

    return (
        <Popover content={contentTitleComplex[lang]} trigger="hover" placement="bottom">
            <div>{contentTitleComplex[lang]}</div>
        </Popover>
    );
}