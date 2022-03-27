import Gallery from "../components/Gallery";
import { SvgTools } from "../components/SvgIcon/SvgIcon";
import ContentCover from "../templates/ContentCover";
import { PageWithCoverAutoOpen } from "../templates/PageWithCover";

export default function () {
    return (
        <PageWithCoverAutoOpen
            cover={
                <ContentCover
                    icon={<SvgTools />}
                    text={
                        <p>
                            纸上得来终觉浅，绝知此事要躬行
                            <br></br><br></br>
                            Knowledges obtained from books are always shallow until apply it practically
                        </p>
                    }
                />
            }
            content={
                <Gallery />
            }
        />
    );
}