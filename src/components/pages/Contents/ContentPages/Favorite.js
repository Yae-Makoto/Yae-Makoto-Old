
import { Menu, Spin } from "antd";
import SubMenu from "antd/lib/menu/SubMenu";
import React, { useEffect, useState } from "react";
import useFetch, { useFetchObject } from "../../../../services/Hooks/useFetch";
import { SvgFire } from "../../../blocks/SvgIcon/SvgIcon";
import Contents from "../Contents";
import ReactDOM from 'react-dom';
import MediaPlayer from "../../../blocks/MediaPlayer/MediaPlayer";


export default function Favorite() {

    const { done: indexDone, data: indexData } = useFetchObject('data/favorite/index.json')
    const { done: genreDone, data: genreData } = useFetchObject('data/favorite/genre.json')



    const setCurrent = (key) => {
        ReactDOM.render(
            indexData[key]['lang']['en']
            , document.getElementById("content_header_title"))
        
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
            siderDefaultCollapsed={false}
            menuOnclick={setCurrent}
            menuContent={
                indexDone && genreDone ?
                    <>
                        {
                            Object.keys(genreData).map(
                                (genre) =>
                                    <SubMenu key={genre} title={genreData[genre]['en']}>
                                        {
                                            Object.keys(indexData).map((i) => {
                                                if (indexData[i]['genre'] === genre) {
                                                    return (
                                                        <Menu.Item key={i}>
                                                            {indexData[i]['lang']['en']}
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
                    </>
                    :
                    <Spin />
            }
            pureContent={
                indexDone && genreDone ?
                    <div id="favorite_content_container"></div>
                    :
                    <Spin />
            }

        />
    );
}