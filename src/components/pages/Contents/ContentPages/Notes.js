
import { SvgPen } from "../../../blocks/SvgIcon/SvgIcon";
import Contents from "../Contents";

export default function Notes() {
    return (
        <Contents
            coverIcon={<SvgPen />}
            coverNotes={
                <p>
                    笔落惊风雨，书成泣鬼神
                    <br></br><br></br>
                    Your brush set to paper, stirred wind and rain, a poem completed made gods and spirits weep
                </p>
            }
            title={'note'}
            menu
        />
    );
}