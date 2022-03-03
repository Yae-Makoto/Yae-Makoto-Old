
import './Buttons.css';
import { useLocation, useNavigate } from 'react-router-dom';
import { SvgBack, SvgMenu } from "../SvgIcon/SvgIcon";
import NotImplemented from "../../../services/Helper/NotImplemented";
import { useState } from 'react';

function Buttons(props) {

    const onClick = props.onClick;
    const active = props.active;
    const none = props.none;

    const [isActive, setIsActive] = useState(false)

    const click = () => {
        if (active) setIsActive(pre => !pre);
        onClick();
    }
    return (
        none ?
            <div className='button_space' />
            :
            <div
                className={`button 
                    ${isActive ? 'button_active' : ''}            
                    ${props.round ? 'button_round' : ''} 
                    ${props.outlined ? 'button_outlined' : ''} 
                    ${props.className ?? ''}`}
                onClick={click}>
                {props.children}
            </div>
    );
}



export function ButtonBack(props) {

    const to = props.to;
    const callback = props.callback ?? NotImplemented;

    const navigate = useNavigate();
    const onClickEvent = () => {
        to ? navigate(to, { state: { sgn: 'back' } }) : navigate('/', { state: 'back' });

        callback();
    }
    return (
        <Buttons {...props} onClick={onClickEvent}>
            <SvgBack />
        </Buttons>
    );
}

export function ButtonMenu(props) {

    const onClick = props.onClick ?? NotImplemented;

    return (
        <Buttons {...props} onClick={onClick}>
            <SvgMenu />
        </Buttons>
    );
}