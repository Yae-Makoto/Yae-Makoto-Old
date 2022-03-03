
import { SvgTools } from "../../../blocks/SvgIcon/SvgIcon";
import Contents from "../Contents";

export default function Works() {
    return (
        <Contents
            coverIcon={<SvgTools />}
            coverNotes={
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
            title={'work'}
            menu
        />
    );
}