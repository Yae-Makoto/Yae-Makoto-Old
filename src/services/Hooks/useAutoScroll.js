import { useEffect } from "react";
import { scrollToBottom, scrollToTop } from "../Helper/ScrollHelper";

const createScrollStopListener = (callback, timeout) => {
    let removed = false;
    let handle = null;
    const onScroll = () => {
        if (handle) clearTimeout(handle);
        handle = setTimeout(callback, timeout || 600);
    };
    window.addEventListener('scroll', onScroll);
    return () => {
        if (removed) return;
        removed = true;
        if (handle) clearTimeout(handle);
        window.removeEventListener('scroll', onScroll);
    };
};

export default function useAutoScroll() {
    useEffect(() => {
        const destroyListener = createScrollStopListener(() => {
            const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
            if (winScroll < height / 2) {
                scrollToTop();
            } else {
                scrollToBottom();
            }
        });
        return () => destroyListener();
    }, [])
}

