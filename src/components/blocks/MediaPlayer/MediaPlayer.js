import { useEffect, useRef, useState } from 'react';
import videojs from "video.js";
import './MediaPlayer.css';
import "./VideoJs.less";

export default function MediaPlayer(props) {

    const [file, setFile] = useState(props.file);

    const videoRef = useRef(null);
    const playerRef = useRef(null);
    const options = {
        // autoplay: true,
        controls: true,
        responsive: true,
        sources: [{
            src: file,
            type: 'video/mp4'
        }]
    }
    const onReady = (player) => {
        playerRef.current = player;

        // you can handle player events here
        player.on('waiting', () => {
            console.log('player is waiting');
        });

        player.on('dispose', () => {
            console.log('player will dispose');
        });
    };

    useEffect(() => {
        // make sure Video.js player is only initialized once
        if (!playerRef.current) {
            const videoElement = videoRef.current;
            if (!videoElement) return;

            const player = playerRef.current = videojs(videoElement, options, () => {
                console.log("player is ready");
                onReady && onReady(player);
            });
        } else {
            // you can update player here [update player through props]
            const player = playerRef.current;
            player.src([{
                src: file
            }])
        }
    }, [options, videoRef]);

    useEffect(() => {
        const player = playerRef.current;
        return () => {
            if (player) {
                player.dispose();
                playerRef.current = null;
            }
        };
    }, [playerRef]);

    useEffect(() => {
        setFile(props.file);
    }, [props])

    return (
        <div className='media'>
            <div className="media_player">
                <div data-vjs-player>
                    <video ref={videoRef} className="video-js" />
                </div>
            </div>
        </div>
    )
}
