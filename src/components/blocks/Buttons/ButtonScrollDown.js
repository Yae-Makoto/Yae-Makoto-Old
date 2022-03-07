import { useState } from 'react';
import { SvgPullDown } from '../SvgIcon/SvgIcon';
import './ButtonScrollDown.less';

export function ButtonScrollDown(props) {
    const scroll = props.scroll ? props.scroll : document.documentElement.scrollHeight - document.documentElement.clientHeight;

    const [ins, setIns] = useState(0);

    return (
        <div className='shape_scrolldown'>
            <div onMouseEnter={() => setIns(1)} onMouseLeave={() => setIns(0)}
                onClick={() =>
                    scroll ? window.scrollTo({ top: scroll, behavior: 'smooth' }) :
                        window.scrollTo({ top: document.documentElement.scrollHeight - document.documentElement.clientHeight, behavior: 'smooth' })}>
                <p style={{ opacity: ins }}>Scroll Down</p>
                <SvgPullDown />
            </div>
        </div>
    );
}