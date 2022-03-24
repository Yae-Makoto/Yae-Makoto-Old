import { SvgFootprint, SvgMountain } from "../components/SvgIcon/SvgIcon";
import Timeline from "../components/Timeline";
import ContentCover from "../templates/ContentCover";
import { PageWithCoverAutoOpen } from "../templates/PageWithCover";

export default function () {
    return (
        <PageWithCoverAutoOpen
            cover={
                <ContentCover
                    icon={<SvgMountain />}
                    text={
                        <p>
                            千里之行，始于足下
                            <br></br><br></br>
                            A journey of a thousand miles begins with a single step
                        </p>
                    }
                />
            }
            content={
                <Timeline />
            }
        />
    )
}