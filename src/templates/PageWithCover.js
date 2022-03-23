import { useEffect, useState } from "react";
import { CSSTransition } from "react-transition-group";
import { ButtonGoBack } from "../components/Buttons";
import "./PageWithCover.css";

export default function PageWithCover(props) {

    const cover = props.cover;
    const content = props.content;
    const opened = props.opened;

    return (
        <div className="pwc">
            <CSSTransition in={opened} timeout={1000} className="pwc-cover">
                <div>
                    {cover}
                </div>
            </CSSTransition>
            <div className="pwc-content">
                {content}
            </div>
        </div>
    )
}

export function PageWithCoverAutoOpen(props) {

    const cover = props.cover;
    const content = props.content;
    const timeout = props.timeout ?? 3900;

    const [opened, setOpened] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setOpened(true);
        }, timeout);
        return () => clearTimeout(timer);
    }, [])

    return (
        <PageWithCover
            opened={opened}
            cover={cover}
            content={<>
                {content}
                <ButtonGoBack />
            </>}
        />
    )
}