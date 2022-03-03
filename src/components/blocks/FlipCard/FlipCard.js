import { useEffect, useState } from "react";
import ReactCardFlip from "react-card-flip";

export default function FlipCard(props) {

    const front = props.front;
    const back = props.back;
    const click = props.onClick ? props.onClick : () => console.log('OnClick Function Not Implemented');
    const direction = props.direction ? props.direction : 'horizontal';
    const duration = props.duration ? props.duration : 1;

    const [isFlipped, setIsFlipped] = useState(false);

    const onMouseEnter = () => {
        setIsFlipped(true)
    }
    const onMouseLeave = () => {
        setIsFlipped(false)
    }
    const onMouseClick = () => {
        if (isFlipped) click();
    }

    return (
        <div onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} style={{ cursor: 'pointer' }}>
            <ReactCardFlip isFlipped={isFlipped} flipSpeedBackToFront={duration} flipSpeedFrontToBack={duration} flipDirection={direction}>
                <div className="flip_card_face flip_card_face_front">{front}</div>
                <div className="flip_card_face flip_card_face_back" onClick={onMouseClick}>{back}</div>
            </ReactCardFlip>
        </div>
    );
}