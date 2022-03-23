import { useContext, useEffect, useRef, useState } from 'react';
import videojs from "video.js";
import './VideoPlayer.css';
import { Context } from '../services/Context/Context';
import { Theme } from '../services/Context/Theme';


function VideoJsStyle() {
    // theme setup

    const { themes, theme } = useContext(Theme);
    const videoJsStyle = `
        <style>
        .video-js {
            color: ${themes[theme].color};
        }
        
        .video-js .vjs-control-bar {
            background-color: white;
        }
        
        .video-js .vjs-progress-control .vjs-progress-holder {
            background-color: ${themes[theme].color};
        }
        
        .video-js .vjs-play-control {
            border: 2px solid ${themes[theme].color};
        }
        
        .video-js .vjs-play-control:hover {
            background-color: ${themes[theme].color};
        }
        
        .vjs-control {
            color: ${themes[theme].color};
        }
        
        .video-js .vjs-fullscreen-control:hover {
            color: white;
            background-color: ${themes[theme].color};
        }
        
        .video-js .vjs-big-play-button .vjs-icon-placeholder:before {
            background-color: white;
        }
        </style>
    `;
    return (
        <div id='video-js-style' dangerouslySetInnerHTML={{ __html: videoJsStyle }} ></div>
    )
}


export default function VideoPlayer() {

    // videojs setup

    const { mediaUrl } = useContext(Context);

    const videoRef = useRef(null);
    const playerRef = useRef(null);
    const options = {
        autoplay: true,
        controls: true,
        responsive: true,
        sources: [{
            src: mediaUrl,
            type: 'video/mp4'
        }]
    }

    const onReady = (player) => {
        playerRef.current = player;

        // you can handle player events here
        player.on('waiting', () => {
        });

        player.on('dispose', () => {
        });
    };

    useEffect(() => {
        // make sure Video.js player is only initialized once
        if (!playerRef.current) {
            const videoElement = videoRef.current;
            if (!videoElement) return;

            const player = playerRef.current = videojs(videoElement, options, () => {
                onReady && onReady(player);
            });
        } else {
            // you can update player here [update player through props]
            const player = playerRef.current;
            if (player.cache_.src !== mediaUrl) {
                player.src([{
                    src: mediaUrl
                }])
            }
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

    return (
        <div className='media'>
            <div className="media_player">
                <div data-vjs-player>
                    <video ref={videoRef} className="video-js" />
                </div>
            </div>
            <VideoJsStyle />
        </div>
    )
}
