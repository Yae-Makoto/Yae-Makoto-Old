import { useNavigate } from "react-router-dom";
import { NotImplemented } from "../services/Helper/Other";
import Button from "../templates/Button";
import { SvgLeave, SvgMenu } from "./SvgIcon/SvgIcon";

export function ButtonGoBack(props) {

    const to = props.to;
    const callback = props.callback ?? NotImplemented;

    const navigate = useNavigate();

    const onClick = () => {
        to ? navigate(to, { state: { sgn: 'back' } }) : navigate('/', { state: 'back' });
        callback();
    }

    return (
        <Button className="btn-go-back" onClick={onClick}>
            <SvgLeave />
        </Button>
    )
}

export function ButtonMenuCall(props) {

    const onClick = props.onClick;
    return (
        <Button className="btn-menu-call" onClick={onClick} defaultActive={false} active={true}>
            <SvgMenu />
        </Button>
    )

}