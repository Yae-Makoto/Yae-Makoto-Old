import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Animator, batch, Fade, MoveIn, Sticky, Zoom } from "react-scroll-motion";
import { scrollToBottom, scrollToTop } from "../../../services/Helper/ScrollHelper";
import TrueOrFalse from "../../../services/Helper/TrueOrFalse";
import useWindowDimension from "../../../services/Hooks/useWindowDimension";
import { ButtonScrollDown } from "../../blocks/Buttons/ButtonScrollDown";
import FlipCard from "../../blocks/FlipCard/FlipCard";
import { SvgBook, SvgHeart, SvgMedal, SvgUser } from "../../blocks/SvgIcon/SvgIcon";
import Template from "../Template";
import bg1 from './bg1.webp';
import bg2 from './bg2.webp';
import './Cover.css'

export default function Cover() {

    const { height, width } = useWindowDimension();
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        var timer;
        if (location.state === 'back') {
            scrollToTop('auto');
            timer = setTimeout(() => {
                scrollToBottom();
            }, 600);
        }
        return () => clearTimeout(timer);
    }, [])

    return (
        <Template
            page1={
                <>
                    <Animator animation={batch(Sticky(), Fade(), Zoom(2, 1))}>
                        <div className='cover_img'>
                            {height > width ?
                                <img src={bg2} alt="Image load failed" />
                                :
                                <img src={bg1} alt="Image load failed" />}
                        </div>
                    </Animator>
                    <div className="top wrapper">
                        <Animator animation={batch(Sticky(), Fade())}>
                            <ButtonScrollDown />
                        </Animator>
                    </div>
                </>
            }
            page2={
                <div className='cover_page'>
                    <Animator animation={batch(Sticky(), Fade())}>
                        {
                            TrueOrFalse() ? <h1>YAE MAKOTO</h1> : <h1>Hongchen Lin</h1>
                        }
                    </Animator>
                    <Animator animation={batch(Sticky(), Fade(), MoveIn(1000, 0))}>
                        <div className='cover_page_index_block'>
                            <div className='cover_page_index'>
                                <FlipCard
                                    className='cover_page_index'
                                    front={<SvgUser />}
                                    back={<div>My<br></br>Self</div>}
                                    onClick={() => navigate('/self')}
                                />
                            </div>
                            <div className='cover_page_index'>
                                <FlipCard
                                    className='cover_page_index'
                                    front={<SvgHeart />}
                                    back={<div>My<br></br>Favorite</div>}
                                    onClick={() => navigate('/favorite')}
                                />
                            </div>
                        </div>
                    </Animator>
                    <Animator animation={batch(Sticky(), Fade(), MoveIn(-1000, 0))}>
                        <div className='cover_page_index_block'>
                            <div className='cover_page_index'>
                                <FlipCard
                                    className='cover_page_index'
                                    front={<SvgBook />}
                                    back={<div>My<br></br>Notes</div>}
                                    onClick={() => navigate('/notes')}
                                />
                            </div>
                            <div className='cover_page_index'>
                                <FlipCard
                                    className='cover_page_index'
                                    front={<SvgMedal />}
                                    back={<div>My<br></br>Works</div>}
                                    onClick={() => navigate('/works')}
                                />
                            </div>

                        </div>
                    </Animator>
                </div>
            }
        />





    );
}