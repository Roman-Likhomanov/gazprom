export const dataMetric = (metric, data, color) => {
         return [
            {
                name: data,
                color: color,
                dashStyle: "Solid",
                data: [
                    [
                        metric[0].datetime,
                        metric[0][data]
                    ],
                    [
                        metric[1].datetime,
                        metric[1][data]
                    ],
                    [
                        metric[2].datetime,
                        metric[2][data]
                    ],
                    [
                        metric[3].datetime,
                        metric[3][data]
                    ],
                    [
                        metric[4].datetime,
                        metric[4][data]
                    ],
                    [
                        metric[5].datetime,
                        metric[5][data]
                    ],
                    [
                        metric[6].datetime,
                        metric[6][data]
                    ],
                    [
                        metric[7].datetime,
                        metric[7][data]
                    ],
                    [
                        metric[8].datetime,
                        metric[8][data]
                    ],
                    [
                        metric[9].datetime,
                        metric[9][data]
                    ],
                    [
                        metric[10].datetime,
                        metric[10][data]
                    ]
                ]
            }
        ]
}

