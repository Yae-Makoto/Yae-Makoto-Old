import { PageWithCoverAutoOpen } from "../templates/PageWithCover";
import { useFetch, useFetchObject } from "../services/Hooks/useFetch";
import MusicPlayer from "../components/MusicPlayer";
import { useContext, useEffect, useState } from "react";
import { Context } from "../services/Context/Context";
import Layout from "../templates/Layout";
import Title from "../components/Title";
import Menu from "../components/Menu";

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
                    <div>cover</div>
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