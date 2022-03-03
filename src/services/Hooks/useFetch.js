import { useEffect, useState } from "react";
import NotImplemented from "../Helper/NotImplemented";

export default function useFetch(url, callback = NotImplemented) {

    const [data, setData] = useState(null);
    const [done, setDone] = useState(false);

    useEffect(() => {
        fetch(url)
            .then(res => res.text())
            .then(data => {
                setData(data);
                callback(data);
                setDone(true);
            })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    return { done, data }
}