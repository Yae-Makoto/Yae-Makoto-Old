import { PageWithCoverAutoOpen } from "../templates/PageWithCover";

export default function () {
    return (
        <PageWithCoverAutoOpen
            cover={
                <div>cover</div>
            }
            content={
                <div>content</div>
            }
        />
    );
}