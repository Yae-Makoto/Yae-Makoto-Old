import Card from "../components/Card";
import { useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { SvgBook, SvgFingerprint, SvgFootprint, SvgLogo, SvgMovie, SvgMusic, SvgStack } from "../components/SvgIcon/SvgIcon";
import coverConfig from "../config/cover.json";
import { Context } from "../services/Context/Context";
import { Theme } from "../services/Context/Theme";
import PageWithCover from "../templates/PageWithCover";
import './Cover.css';

export default function () {

    const navigate = useNavigate();
    const location = useLocation();

    const { themes, theme } = useContext(Theme);
    const { lang } = useContext(Context);
    const [opened, setOpened] = useState(false)

    useEffect(() => {
        var timer;
        if (location.state === 'back') {
            timer = setTimeout(() => {
                setOpened(true);
            }, 600);
        }
        return () => clearTimeout(timer);
    }, [])

    return (
        <PageWithCover
            opened={opened}
            cover={
                <div className='cover-img' style={{ fill: themes[theme].color }}>
                    <div onClick={() => setOpened(true)}>
                        <SvgLogo />
                        <SvgLogo />
                    </div>
                </div>
            }
            content={
                <div className="cover-index">
                    <Card svg={<SvgFingerprint />} text={coverConfig[0][lang]} onClick={() => navigate('/info')} />
                    <Card svg={<SvgFootprint />} text={coverConfig[5][lang]} onClick={() => navigate('/footprint')} />
                    {/* <Card svg={<SvgBook />} text={coverConfig[1][lang]} onClick={() => navigate('/note')} /> */}
                    <Card svg={<SvgStack />} text={coverConfig[2][lang]} onClick={() => navigate('/app')} />
                    <Card svg={<SvgMusic />} text={coverConfig[3][lang]} onClick={() => navigate('/music')} />
                    <Card svg={<SvgMovie />} text={coverConfig[4][lang]} onClick={() => navigate('/video')} />
                </div>
            }
        />
    );
}