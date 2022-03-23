
import { Menu, Spin } from "antd";
import { useContext, useEffect } from "react";
import ReactDOM from 'react-dom';
import { Context } from "../../../../services/Context/Context";
import { useFetchObject } from "../../../../services/Hooks/useFetch";
import Markdown from "../../../blocks/Markdown/Markdown";
import { SvgPen, SvgTools } from "../../../blocks/SvgIcon/SvgIcon";
import { TitleSimple } from "../../../blocks/Title/Title";
import Contents from "../Contents";

function MarkdownMenu(props) {
    const indexData = props.indexData;
    const url = props.url;
    const { setContentTitle } = useContext(Context);
    const onMenuClick = ({ key }) => {
        setContentTitle(indexData[key]);
        ReactDOM.render(
            <Markdown url={`${url}/files/${key}`} />
            , document.getElementById("md_content_container"))
    }
    useEffect(() => {
        setContentTitle("");
    }, [])

    return (
        <Menu mode="inline"
            className="content_sider"
            onClick={onMenuClick}>
            {
                Object.keys(indexData).map((f) =>

                    <Menu.Item key={f}>
                        {indexData[f]}
                    </Menu.Item>
                )
            }
        </Menu>
    );
}

function MarkdownPages(props) {
    const url = props.url;
    const coverIcon = props.coverIcon;
    const coverNotes = props.coverNotes;

    const { done: indexDone, data: indexData } = useFetchObject(`${url}/index.json`);

    return (
        <Contents
            coverIcon={coverIcon}
            coverNotes={coverNotes}
            menu
            menuContent={
                indexDone ?
                    <MarkdownMenu indexData={indexData} url={url} />
                    :
                    <Spin />
            }
            pureContent={
                <div id="md_content_container"></div>
            }
            title={<TitleSimple />}
        />
    );

}

export function Notes() {

    return (
        <MarkdownPages
            url={'data/notes'}
            // coverIcon={}
            coverNotes={
                <p>
                    笔落惊风雨，书成泣鬼神
                    <br></br><br></br>
                    Your brush set to paper, stirred wind and rain, a poem completed made gods and spirits weep
                </p>
            }
        />
    );
}

export function Works() {

    return (
        <MarkdownPages
            url={'data/works'}
            // coverIcon={}
            coverNotes={
                <p>
                    黑发不知勤学早，白首方悔读书迟
                    <br></br>
                    纸上得来终觉浅，绝知此事要躬行
                    <br></br><br></br>
                    The young should know the importance of learning, rather than regret when one grows old
                    <br></br>
                    Knowledges obtained from books are always shallow until apply it practically
                </p>
            }
        />
    );
}