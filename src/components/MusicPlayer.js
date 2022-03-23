import { useContext, useEffect, useState } from "react";
import { Context } from "../services/Context/Context";
import { Theme } from "../services/Context/Theme";
import { Player } from "../services/Helper/Player";
import { RandomSvg } from "../services/Helper/RandomSvg";
import "./MusicPlayer.css";
import { SvgHarp, SvgHarp1 } from "./SvgIcon/SvgIcon";




export default function (props) {
    const { playlistId, player } = useContext(Context);
    const { themes, theme } = useContext(Theme);

    const playlist = props.playlist;
    const [isPlaying, setIsPlaying] = useState(false);

    const svgStyle = `
        <style>
        .player-control-svg svg *{
            stroke: ${themes[theme].color};
        }
        .player-control-wrapper{
            background: linear-gradient(10deg, ${themes[theme].color}dd, white, ${themes[theme].color}dd);
        }
        </style>
    `;


    useEffect(() => {
        player.init(playlist);
        return () => {
            player.destroy();
        }
    }, [])


    return (
        <div className="music-player">
            <div className="player-control"
                style={{ borderColor: themes[theme].color }}
                onClick={() => {
                    if (isPlaying) {
                        player.pause();
                    } else {
                        player.play();
                    }
                    setIsPlaying(pre => !pre);
                }}>
                <div className={`player-control-wrapper ${isPlaying ? 'running' : 'paused'}`}>
                    <div className={`player-control-svg`} >
                        <SvgHarp />
                    </div>
                </div>
                <div dangerouslySetInnerHTML={{ __html: svgStyle }}></div>
            </div>
        </div>

    )
}