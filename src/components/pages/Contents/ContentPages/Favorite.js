
import { Menu, Spin } from "antd";
import SubMenu from "antd/lib/menu/SubMenu";
import useFetch, { useFetchObject } from "../../../../services/Hooks/useFetch";
import { SvgFire } from "../../../blocks/SvgIcon/SvgIcon";
import Contents from "../Contents";


export default function Favorite() {

    const { done: indexDone, data: indexData } = useFetchObject('data/favorite/index.json')
    const { done: genreDone, data: genreData } = useFetchObject('data/favorite/genre.json')
    const generateMenu = () => {
        console.log(Object.keys(genreData))
        // const keys = Object.keys(data)
        for (const genreKey of Object.keys(genreData)) {

        }

        for (const indexKey of Object.keys(indexData)) {

        }
        // for (const key of Object.keys(data)) {

        // }
    }

    if (indexDone && genreDone) {
        generateMenu()
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
            title={'favor'}
            menu
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
                                                        <Menu.Item>
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
        />
    );
}