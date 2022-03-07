import './FlipCard.css';

export default function FlipCard(props) {

    const front = props.front;
    const back = props.back;
    const click = props.onClick ? props.onClick : () => console.log('OnClick Function Not Implemented');

    const onMouseClick = () => {
        click();
    }

    return (
        <div style={{ cursor: 'pointer' }} onClick={onMouseClick}>
            <div className="flip_card_container">
                <div className="flip_card_face flip_card_face_front">{front}{back}</div>
            </div>
        </div>
    );
}