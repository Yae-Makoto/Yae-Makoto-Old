import { Menu, Switch } from "antd";
import SubMenu from "antd/lib/menu/SubMenu";
import { useContext } from "react";
import { Context } from "../../../services/Context/Context";
import { language } from "../../../services/Helper/LanguageManager";
import { SvgMp3, SvgMp4 } from "../SvgIcon/SvgIcon";
import ReactDOM from 'react-dom';
import { StandaloneTitle } from "../Title/Title";
import MediaPlayer from "../MediaPlayer/MediaPlayer";
export default function StandaloneMenu(props) {
    const { lang,
        setLang,
        changeLang, contentTitle,
        setContentTitle } = useContext(Context);
    const genreData = props.genreData;
    const indexData = props.indexData;

    const onMenuClick = ({ key }) => {
        setContentTitle(indexData[key]['lang']);
        // // console.log(indexData, Object.keys(key)[0])
        // ReactDOM.render(
        //     <StandaloneTitle title={indexData[key]['lang']} />
        //     , document.getElementById("content_title_container"))
        // // ReactDOM.render(
        // //     indexData[key]['lang'][lang]
        // //     , document.getElementById("content_header_title_tooltip"))
        ReactDOM.render(
            <MediaPlayer file={`data/favorite/files/${key}`} />
            , document.getElementById("content_block"))
    }

    return (
        <Menu mode="inline"
            defaultSelectedKeys={[Object.keys(indexData)[0]]}
            className="content_sider"
            defaultOpenKeys={[Object.keys(genreData)[0]]}
            onClick={onMenuClick}
        >
            <div className="lang_switch">
                <Switch checkedChildren="Chinese" unCheckedChildren="English" checked={language() === 'zh'} onClick={(l) => changeLang(l)} />
            </div>
            {
                Object.keys(genreData).map(
                    (genre) =>
                        <SubMenu key={genre} title={genreData[genre][lang]}>
                            {
                                Object.keys(indexData).map((i) => {
                                    if (indexData[i]['genre'] === genre) {
                                        console.log(i)
                                        return (
                                            <Menu.Item key={i} icon={
                                                i.endsWith('mp4') ? <SvgMp4 /> : i.endsWith('mp3') ? <SvgMp3 /> : <></>
                                            }>
                                                {indexData[i]['lang'][lang]}
                                            </Menu.Item>
                                        );
                                    } else {
                                        return "";
                                    }
                                })
                            }
                        </SubMenu>
                )
            }
        </Menu>
    )
}