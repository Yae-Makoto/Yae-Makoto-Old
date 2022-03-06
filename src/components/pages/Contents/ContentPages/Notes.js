
import { Menu, Spin } from "antd";
import ReactDOM from 'react-dom';
import { useFetchObject } from "../../../../services/Hooks/useFetch";
import Markdown from "../../../blocks/Markdown/Markdown";
import { SvgPen } from "../../../blocks/SvgIcon/SvgIcon";
import Contents from "../Contents";

export default function Notes() {
    const { done: indexDone, data: indexData } = useFetchObject('data/notes/index.json')

    const setCurrent = (key, title) => {
        ReactDOM.render(
            <Markdown url={`data/notes/files/${key}`} />
            , document.getElementById("md_content_container"))
        ReactDOM.render(
            title
            , document.getElementById("content_header_title"))
    }

    return (
        <Contents
            coverIcon={<SvgPen />}
            coverNotes={
                <p>
                    笔落惊风雨，书成泣鬼神
                    <br></br><br></br>
                    Your brush set to paper, stirred wind and rain, a poem completed made gods and spirits weep
                </p>
            }
            title={'note'}
            menu
            menuOnclick={setCurrent}
            menuContent={
                indexDone ?
                    <Menu mode="inline" defaultSelectedKeys={['1']} className="content_sider">

                        {
                            indexData.map((f) =>

                                <Menu.Item key={f.name} onClick={() => setCurrent(f.name, f.title)}>
                                    {f.title}
                                </Menu.Item>
                            )
                        }
                    </Menu>
                    :
                    <Spin />


            }
            pureContent={
                <div id="md_content_container"></div>
            }
        />
    );
}