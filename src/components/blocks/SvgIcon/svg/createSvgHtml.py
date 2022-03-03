import os
arr = [i for i in os.listdir('.') if i.endswith('svg')]
with open('SvgHtml.html', 'w+', encoding='utf-8') as f:
    for i in arr:
        f.write(
            """
            <div class='svg'>
                {}
                <h6>{}</h6>
            </div>
            """.format(open(i, 'r').read(), i)
        )
    f.write(
        """
        <style>
            body {
                display: flex;
                flex-wrap: wrap;
                -webkit-touch-callout: none;
                -webkit-user-select: none;
                -khtml-user-select: none;
                -moz-user-select: none;
                -ms-user-select: none;
                user-select: none;
            }
            .svg {
                width: 110px;
                height: 130px;
                overflow: hidden;
                display: flex;
                flex-direction: column;
                align-items: center;
                border: 1px solid black;
                margin: 10px;
                justify-content: space-evenly;
                transition: all .3s ease-in-out;
                cursor: pointer;
            }
            .svg:hover {
                background-color: rgba(177, 177, 177, .1);
            }
            .svg svg {
                height: 50px;
                width: 50px
            }
            .svg h6 {
                margin: 0px;
                text-overflow: ellipsis;
                width: 100px;
                overflow: hidden;
                text-align: center;
            }
        </style>
        """
    )
