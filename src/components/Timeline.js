import { Timeline } from "antd";
import { useContext } from "react";
import { Context } from "../services/Context/Context";
import { Theme } from "../services/Context/Theme";
import { useFetchObject } from "../services/Hooks/useFetch";
import "./Timeline.css";

export default function (props) {
    const { done, data } = useFetchObject('data/footprint/index.json');
    const { lang } = useContext(Context);
    const { themes, theme } = useContext(Theme);
    return (
        done ?
            <div className="timeline">
                <Timeline mode="left" pending>
                    {
                        data.map((e) =>
                            <Timeline.Item label={e.time} color={themes[theme].color}>
                                <h1>{e.title[lang]}</h1>
                                <h6>
                                    {e.location[lang]}
                                </h6>
                                <p>{e.content[lang]}</p>
                            </Timeline.Item>
                        )
                    }
                </Timeline>
                <div dangerouslySetInnerHTML={{
                    __html: `
                    <style>
                    .timeline svg {
                        fill: ${themes[theme].color} !important
                    }
                    .ant-timeline-item-tail {
                        border-color: ${themes[theme].color}99 !important
                    }
                    .ant-timeline {
                        border-color: ${themes[theme].color}99 !important
                    }
                    </style>
                `}}></div>
            </div >
            :
            <></>
    )
}