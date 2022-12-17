'use strict';

const calcShit = function (...numbers) {
    const xmax = Math.max(...numbers);
    let xmin = Math.min(...numbers);
    const k = Math.floor(1 + 3.322 * Math.log10(numbers.length));
    let deltaX = (xmax - xmin) / k;

    deltaX = 1.94; // hardcode value
    xmin = 9.48; // hardcode value

    console.log(`xmax: ${xmax}`, `xmin: ${xmin}`, `deltaX: ${deltaX}`);

    // Интервалы
    const intervals = [];

    Array.from({ length: k }, () => 0).reduce(acc => {
        intervals.push([acc, (acc += deltaX)]);
        return acc;
    }, xmin);

    // Объем выборки
    const nCounts = new Array(k).fill(0);

    numbers.forEach(number => {
        for (let i = 0; i < intervals.length; i++) {
            const [firstOfInterval, secondOfInterval] = intervals[i];
            if (number >= firstOfInterval && number <= secondOfInterval)
                ++nCounts[i];
        }
    });

    // убеждаемся что ничего не потеряно(объем выборки)
    const nOverall = nCounts.reduce((acc, cur) => acc + cur, 0);

    // Относительные частоты
    const relativeFrequency = nCounts.map(count => count / nOverall);
    const overAllFrequency = relativeFrequency.reduce(
        (acc, cur) => acc + cur,
        0
    );

    // Гистограмма относительных частот
    const histogramRelativeFrequency = relativeFrequency.map(
        rel => +(rel / deltaX).toFixed(2)
    );

    // Площадь гистограммы относительных частот
    const overAllHistogram = (
        deltaX *
        relativeFrequency
            .map(count => count / deltaX)
            .reduce((acc, cur) => acc + cur, 0)
    ).toFixed(0);

    console.log(relativeFrequency.map(count => (count / deltaX).toFixed(2)));

    console.log(`Интервалы: `);
    console.log(intervals);
    console.log(`Объем выборки: `);
    console.log(nCounts);
    console.log(`Провека объема выборки: `);
    console.log(nOverall);
    console.log(`Относительные частоты: `);
    console.log(relativeFrequency);
    console.log(`Проверка относительных частот: `);
    console.log(overAllFrequency);
    console.log(`Гистограмма относительных частот: `);
    console.log(histogramRelativeFrequency);
    console.log(
        `Площадь гистограммы относительных частот равна ${overAllHistogram}`
    );
};

calcShit(
    16.95,
    17.19,
    16.1,
    18.74,
    17.31,
    13.88,
    17.32,
    13.84,
    17.95,
    16.19,
    13.48,
    15.12,
    17.36,
    16.93,
    10.91,
    13.22,
    19.25,
    10.13,
    15.53,
    11.86,
    14.2,
    16.94,
    13.59,
    13.25,
    12.77,
    16.57,
    14.1,
    19.16,
    17.41,
    11.68,
    14.65,
    17.66,
    15.73,
    9.51,
    13.9,
    18.22,
    11.71,
    16.7,
    15.84,
    12.07,
    16.87,
    21.11,
    17.39,
    13.24,
    14.83,
    15.36,
    13.08,
    15.89,
    20.65,
    17.85
);
