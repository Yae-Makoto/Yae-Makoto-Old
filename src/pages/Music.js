import { PageWithCoverAutoOpen } from "../templates/PageWithCover";
import { useFetch, useFetchObject } from "../services/Hooks/useFetch";
import MusicPlayer from "../components/MusicPlayer";
import { useContext, useEffect, useState } from "react";
import { Context } from "../services/Context/Context";
import Layout from "../templates/Layout";
import Title from "../components/Title";
import Menu from "../components/Menu";
import { SvgHarp } from "../components/SvgIcon/SvgIcon";
import ContentCover from "../templates/ContentCover";

export default function () {
    const { done, data } = useFetchObject('/data/music/index.json');
    const { player, setMediaUrl, setContentTitle } = useContext(Context);
    const [selectedKeys, setSelectedKeys] = useState(['0 0']);
    useEffect(() => {
        player.setPlayIndexChangeCallback((keyPath, name) => {
            setSelectedKeys([keyPath.join(' ')]);
            console.log(name)
            setContentTitle(name);
        });
    }, [])

    return (
        done ?
            <PageWithCoverAutoOpen
                cover={
                    <ContentCover
                        icon={<SvgHarp />}
                        text={
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
                    />
                }
                content={
                    <Layout
                        header={
                            <Title />
                        }
                        sider={
                            <Menu index={data} onClick={(key, name, keyPath) => {
                                player.setCurrentPlay(keyPath[0], keyPath[1]);
                                // setMediaUrl(`data/video/files/${key}`);
                                setContentTitle(name);
                            }}
                                selectedKeys={selectedKeys}
                            />
                        }
                        content={
                            <MusicPlayer playlist={data} />
                        }
                    />
                }
            />
            :
            <></>
    );
}