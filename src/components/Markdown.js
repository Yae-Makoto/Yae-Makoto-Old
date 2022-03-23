
import { Spin } from "antd";
import { marked } from "marked";
import { useContext } from "react";
import { Theme } from "../services/Context/Theme";
import { useKeepFetch } from "../services/Hooks/useFetch";
import './Markdown.css';




export default function Markdown(props) {

    const { done, data } = useKeepFetch(props.url);
    const { themes, theme } = useContext(Theme);

    const mdStyle = `
        <style>

        .head svg {
            border: 6px solid ${themes[theme].color};
            fill: ${themes[theme].color};
        }


        </style>
    `

    return (
        done ?
            <>
                <div className='markdown'
                    dangerouslySetInnerHTML={{ __html: marked.parse(data) }}>
                </div>
                <div id='md-style' dangerouslySetInnerHTML={{ __html: mdStyle }} />
            </>
            :
            <Spin />
    );
}