
import { SvgFire } from "../../../blocks/SvgIcon/SvgIcon";
import Contents from "../Contents";


export default function Favorite() {
    return (
        <Contents
            coverIcon={<SvgFire />}
            coverNotes={
                <p>
                    愿希望之火与你我同在
                    <br></br>
                    为世界上所有的美好而战
                    <br></br><br></br>
                    May the fires of hope always guide us
                    <br></br>
                    Fight for all that is beautiful in the world
                </p>
            }
            title={'favor'}
            menu
        />
    );
}