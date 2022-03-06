import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import NotImplemented from "../../../services/Helper/NotImplemented";
import { SvgBack, SvgMenu } from "../SvgIcon/SvgIcon";
import './Buttons.less';

function Buttons(props) {

    const onClick = props.onClick;
    const active = props.active;
    const none = props.none;
    const init = props.init === true ? true : false;

    const [isActive, setIsActive] = useState(init)

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