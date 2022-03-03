import { useState } from "react";
import { ScrollContainer, ScrollPage } from "react-scroll-motion";
import useAutoScroll from "../../services/Hooks/useAutoScroll";
import './Template.css';

export default function Template(props) {

    const page1 = props.page1;
    const page2 = props.page2;
    const [id, setId] = useState(Math.random())

    // either scroll to top or bottom
    useAutoScroll();

    return (
        <div className={`${props.className ?? ''} page`} id={id}>
            <ScrollContainer>
                <div className="subpage">
                    <ScrollPage page={0}>
                        {page1}
                    </ScrollPage>
                </div>
                <div className="subpage">
                    <ScrollPage page={1}>
                        {page2}
                    </ScrollPage>
                </div>
            </ScrollContainer>
        </div>
    );
}