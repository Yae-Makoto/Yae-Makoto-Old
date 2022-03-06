import { Spin } from "antd";
import { marked } from "marked";
import { useKeepFetch } from "../../../services/Hooks/useFetch";
import './Markdown.css';

export default function Markdown(props) {

    const { done, data } = useKeepFetch(props.url);

    return (
        done ?
            <div className="markdown" dangerouslySetInnerHTML={{ __html: marked.parse(data) }}>
            </div>
            :
            <Spin />
    );
}