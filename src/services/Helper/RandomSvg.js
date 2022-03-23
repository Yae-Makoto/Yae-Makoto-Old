import { RandomInt } from "./Other";

export function RandomSvg(pointNum = 3) {
    const abs = (x, y) => {
        return Math.sqrt(Math.pow(x[1] - x[0], 2) + Math.pow(y[1] - y[0], 2))
    }
    const sort = (lis) => {
        var ls = lis;
        console.log(lis)
        for (let p = 0; p < ls.length - 1; p++) {
            var max = 0;
            var maxIdx = 0;
            for (let i = p + 1; i < ls.length; i++) {
                var distance = abs(ls[p], ls[i]);
                console.log(distance)
                if (distance > max) {
                    max = distance;
                    maxIdx = i;
                }
            }
            console.log('--------')
            console.log(abs(ls[p], ls[maxIdx]))
            console.log('--------')
            var temp = ls[p + 1];
            ls[p + 1] = ls[maxIdx];
            ls[maxIdx] = temp;
            console.log(ls)
        }
        return ls;
    }
    var points = []
    for (let i = 0; i < pointNum; i++) {
        points.push([RandomInt(1, 99), RandomInt(1, 99)]);
    }
    points.push([10, 10])
    points.push([90, 10])
    points.push([10, 90])
    points.push([90, 90])

    points = sort(points);

    var svg = `
    <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 100 100">
        <path d="M ${points[0][0]} ${points[0][1]} `

    for (let i = 1; i < points.length - 1; i++) {
        svg += `L ${points[i][0]} ${points[i][1]} `
    }

    svg += `"/>
    // </svg>`;

    return svg;
}