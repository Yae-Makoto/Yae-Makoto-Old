import { Carousel } from "antd";
import { Content } from "antd/lib/layout/layout";
import { useContext, useState } from "react";
import { useFetch, useFetchObject, useKeepFetch } from "../services/Hooks/useFetch";
import { marked } from "marked";
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import Button from "../templates/Button";
import "./Gallery.css";
import { SvgLeft, SvgRight } from "./SvgIcon/SvgIcon";
import { Context } from "../services/Context/Context";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

function GalleryMd(props) {
    const url = props.url;
    const { lang } = useContext(Context);
    const { done, data } = useKeepFetch(`data/project/files/${url}-${lang}.md`);
    return (
        done ?
            <div className="gallery-md" dangerouslySetInnerHTML={{ __html: marked.parse(data) }} />
            :
            <></>
    )

}

export default function () {
    const { done, data } = useFetchObject('data/project/index.json');
    const contentStyle = {
        height: '160px',
        color: '#fff',
        lineHeight: '160px',
        textAlign: 'center',
        background: '#364d79',
    };
    const [index, setIndex] = useState(0);
    const handleIndexChange = (idx) => {
        setIndex(idx);
    }
    return (
        done ?
            <>
                <AutoPlaySwipeableViews
                    index={index}
                    onChangeIndex={handleIndexChange}
                    enableMouseEvents
                    interval={10000}
                >
                    {
                        data.map((e) =>
                            <div key={e} className="gallery-page">
                                <div className="gallery-page-bg" style={{
                                    backgroundImage: `url('data/project/files/${e}.jpg')`,
                                    backgroundPosition: 'center',
                                    backgroundSize: 'cover'
                                }}></div>
                                <GalleryMd url={e} />
                            </div>
                        )
                    }
                </AutoPlaySwipeableViews>
                <Button className="btn-last" onClick={() => {
                    setIndex(pre => (pre - 1 + data.length) % data.length)
                }}>
                    <SvgLeft />
                </Button>
                <Button className="btn-next" onClick={() => {
                    setIndex(pre => (pre + 1) % data.length)
                }}>
                    <SvgRight />
                </Button>
            </>
            :
            <></>
    );
}