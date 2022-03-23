import { ButtonGoBack } from "../components/Buttons";
import Markdown from "../components/Markdown";
import { SvgSnow } from "../components/SvgIcon/SvgIcon";
import ContentCover from "../templates/ContentCover";
import { PageWithCoverAutoOpen } from "../templates/PageWithCover";
import "./Info.css";


export default function () {
    return (
        <PageWithCoverAutoOpen
            cover={
                <ContentCover
                    icon={<SvgSnow />}
                    text={
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
                />
            }
            content={
                <Markdown url='data/info/me.md' />
            }
        />
    );
}