import { PageWithCoverAutoOpen } from "../templates/PageWithCover";
import Menu from "../components/Menu";
import { useFetch, useFetchObject } from "../services/Hooks/useFetch";
import Layout from "../templates/Layout";
import { useContext, useState } from "react";
import { Context } from "../services/Context/Context";
import VideoPlayer from "../components/VideoPlayer";
import Title from "../components/Title";
import ContentCover from "../templates/ContentCover";
import { SvgFire } from "../components/SvgIcon/SvgIcon";

export default function () {
    const { done, data } = useFetchObject('/data/video/index.json');
    const { setMediaUrl, setContentTitle } = useContext(Context);
    return (
        done ?
            <PageWithCoverAutoOpen
                cover={
                    <ContentCover
                        icon={<SvgFire />}
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