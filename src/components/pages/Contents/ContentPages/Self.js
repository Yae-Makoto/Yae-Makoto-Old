
import { Spin } from "antd";
import { marked } from "marked";
import useFetch from "../../../../services/Hooks/useFetch";
import { SvgSnow } from "../../../blocks/SvgIcon/SvgIcon";
import Contents from "../Contents";

export default function Self() {

    const { done, data } = useFetch('data/self/me.md')

    return (

        <Contents
            coverIcon={<SvgSnow />}
            coverNotes={
                <p>
                    皑如山上雪，皎若云间月
                    <br></br>
                    愿得一心人，白首不相离
                    <br></br><br></br>
                    Love should be as plain as snow on the hill, as clear as moon among the clouds
                    <br></br>
                    Wish I could spend my life with my true love, untill death took us apart
                </p>
            }
            pureContent={
                done ?
                    <div className="markdown" dangerouslySetInnerHTML={{ __html: marked.parse(data) }}>
                    </div>
                    :
                    <Spin />
            }
        />
    );
}