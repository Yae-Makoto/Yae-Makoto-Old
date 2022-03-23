import { PageWithCoverAutoOpen } from "../templates/PageWithCover";
import Menu from "../components/Menu";
import { useFetch, useFetchObject } from "../services/Hooks/useFetch";
import Layout from "../templates/Layout";
import { useContext, useState } from "react";
import { Context } from "../services/Context/Context";
import VideoPlayer from "../components/VideoPlayer";
import Title from "../components/Title";

export default function () {
    const { done, data } = useFetchObject('/data/video/index.json');
    const { setMediaUrl, setContentTitle } = useContext(Context);
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
                            <Menu index={data} onClick={(key, name) => {
                                setMediaUrl(`data/video/files/${key}`);
                                setContentTitle(name);
                            }} />
                        }
                        content={
                            <VideoPlayer />
                        }
                    />
                }
            />
            :
            <></>
    );
}