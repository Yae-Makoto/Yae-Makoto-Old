
import { Menu, Spin, Switch } from "antd";
import SubMenu from "antd/lib/menu/SubMenu";
import React, { useState } from "react";
import ReactDOM from 'react-dom';
import { languageChange, languageInit } from "../../../../services/Helper/LanguageManager";
import { useFetchObject } from "../../../../services/Hooks/useFetch";
import MediaPlayer from "../../../blocks/MediaPlayer/MediaPlayer";
import { SvgFire, SvgMp3, SvgMp4 } from "../../../blocks/SvgIcon/SvgIcon";
import Contents from "../Contents";


export default function Favorite() {

    const { done: indexDone, data: indexData } = useFetchObject('data/favorite/index.json')
    const { done: genreDone, data: genreData } = useFetchObject('data/favorite/genre.json')
    const [lang, setLang] = useState(languageInit());

    const setCurrent = (key) => {
        ReactDOM.render(
            indexData[key]['lang'][lang]
            , document.getElementById("content_header_title"))
        ReactDOM.render(
            indexData[key]['lang'][lang]
            , document.getElementById("content_header_title_tooltip"))
        ReactDOM.render(
            <MediaPlayer file={`data/favorite/files/${key}`} />
            , document.getElementById("favorite_content_container"))
    }


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
            menuOnclick={setCurrent}
            menuContent={
                indexDone && genreDone ?
                    <Menu mode="inline"
                        defaultSelectedKeys={[Object.keys(indexData)[0]]}
                        className="content_sider"
                        defaultOpenKeys={[Object.keys(genreData)[0]]}>
                        <div className="lang_switch">
                            <Switch checkedChildren="Chinese" unCheckedChildren="English" checked={lang === 'zh'} onClick={(l) => { languageChange(l, setLang) }} />
                        </div>
                        {
                            Object.keys(genreData).map(
                                (genre) =>
                                    <SubMenu key={genre} title={genreData[genre][lang]}>
                                        {
                                            Object.keys(indexData).map((i) => {
                                                if (indexData[i]['genre'] === genre) {
                                                    return (
                                                        <Menu.Item key={i} onClick={() => setCurrent(i)} icon={
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
                    :
                    <Spin />
            }
            title={indexDone && genreDone ? indexData[Object.keys(indexData)[0]]['lang'][lang] : ""}
            titleTooltip={indexDone && genreDone ? indexData[Object.keys(indexData)[0]]['lang'][lang] : ""}
            pureContent={
                indexDone && genreDone ?
                    <div id="favorite_content_container">
                        <MediaPlayer file={`data/favorite/files/${Object.keys(indexData)[0]}`} />
                    </div>
                    :
                    <Spin />
            }

        />
    );
}