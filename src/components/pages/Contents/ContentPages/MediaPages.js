import { useContext, useEffect } from "react";
import { Context } from "../../../../services/Context/Context";
import MediaPlayer from "../../../blocks/MediaPlayer/MediaPlayer";
import ReactDOM from "react-dom";
import { Menu, Spin, Switch } from "antd";
import { SubMenu } from "antd/node_modules/rc-menu";
import { SvgFire, SvgMp3, SvgMp4 } from "../../../blocks/SvgIcon/SvgIcon";
import { language } from "../../../../services/Helper/LanguageManager";
import { useFetchObject } from "../../../../services/Hooks/useFetch";
import Contents from "../Contents";
import { TitleLang } from "../../../blocks/Title/Title";

function MediaMenu(props) {
    const { lang,
        setLang,
        changeLang, contentTitle,
        setContentTitle, contentTitleComplex,
        setContentTitleComplex,
        mediaUrl, setMediaUrl, } = useContext(Context);
    const genreData = props.genreData;
    const indexData = props.indexData;

    const onMenuClick = ({ key }) => {
        console.log(indexData[key]['lang'])
        setContentTitleComplex(indexData[key]['lang']);
        setMediaUrl(`data/favorite/files/${key}`)
        ReactDOM.render(
            <MediaPlayer file={`data/favorite/files/${key}`} />
            , document.getElementById("content_block"))
    }
    useEffect(() => {
        setContentTitleComplex(indexData[Object.keys(indexData)[0]]['lang']);
    }, [])

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

export function Favorite() {

    const { done: indexDone, data: indexData } = useFetchObject('data/favorite/index.json')
    const { done: genreDone, data: genreData } = useFetchObject('data/favorite/genre.json')

    return (
        <Contents
            coverIcon={<SvgFire />}
            coverNotes={
                <p>
                    愿希望之火与你我同在
                    <br></br>
                    为世界上所有的美好而战
                    <br></br><br></br>
                    May the fires of hope always guide us
                    <br></br>
                    Fight for all that is beautiful in the world
                </p>
            }
            menu
            menuContent={
                indexDone && genreDone ?
                    <MediaMenu indexData={indexData} genreData={genreData} />
                    :
                    <Spin />
            }
            title={<TitleLang />}
            pureContent={
                indexDone && genreDone ?
                    <MediaPlayer file={`data/favorite/files/${Object.keys(indexData)[0]}`} />
                    :
                    <Spin />
            }

        />
    );
}