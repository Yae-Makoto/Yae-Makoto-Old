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
                            黑发不知勤学早，白首方悔读书迟
                            <br></br>
                            纸上得来终觉浅，绝知此事要躬行
                            <br></br><br></br>
                            The young should know the importance of learning, rather than regret when one grows old
                            <br></br>
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