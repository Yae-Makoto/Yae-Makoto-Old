import "./ContentCover.css";

export default function (props) {
    const icon = props.icon;
    const text = props.text;
    return (
        <div className='content-cover'>
            {icon}
            <br></br><br></br>
            {text}
        </div>
    );
}