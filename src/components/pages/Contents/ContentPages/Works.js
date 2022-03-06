
import { Menu, Spin } from "antd";
import ReactDOM from 'react-dom';
import { useFetchObject } from "../../../../services/Hooks/useFetch";
import Markdown from "../../../blocks/Markdown/Markdown";
import { SvgTools } from "../../../blocks/SvgIcon/SvgIcon";
import Contents from "../Contents";


export default function Works() {
    const { done: indexDone, data: indexData } = useFetchObject('data/works/index.json')
    const setCurrent = (key, title) => {
        ReactDOM.render(
            <Markdown url={`data/works/files/${key}`} />
            , document.getElementById("md_content_container"));
        ReactDOM.render(
            title
            , document.getElementById("content_header_title"))
        ReactDOM.render(
            title
            , document.getElementById("content_header_title_tooltip"))
    }
    return (
        <Contents
            coverIcon={<SvgTools />}
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
            title={'work'}
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