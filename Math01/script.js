'use strict';

const calcShit = function (...numbers) {
    const xmax = Math.max(...numbers);
    let xmin = Math.min(...numbers);
    const k = Math.floor(1 + 3.322 * Math.log10(numbers.length));
    let deltaX = (xmax - xmin) / k;

    // deltaX = 1.94; // hardcode value
    // xmin = 9.48; // hardcode value

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

    const midIntervals = intervals.map(
        ([firstInterval, secondInterval]) =>
            +((firstInterval + secondInterval) / 2).toFixed(2)
    );

    // Выборочная средняя
    const avgSample = +midIntervals
        .map((interval, index) => interval * relativeFrequency[index])
        .reduce((acc, cur) => acc + cur, 0)
        .toFixed(3);

    // Выборочная дисперсия
    const varianceSample = +(
        midIntervals
            .map((interval, index) => interval ** 2 * relativeFrequency[index])
            .reduce((acc, cur) => acc + cur, 0) - Math.pow(avgSample, 2)
    ).toFixed(3);

    // Выборочное среднее квадратическое отклонение
    const Gb = +Math.sqrt(varianceSample).toFixed(3);

    // Исправленные значения дисперсии
    const S2 = +((nOverall / (nOverall - 1)) * varianceSample).toFixed(3);

    // Среднее квадратическое отклонение
    const S = +Math.sqrt(S2).toFixed(3);

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
    console.log(`Дискретный вариационный ряд: `);
    console.log(midIntervals);

    console.log(`Выборочная средняя: ${avgSample}`);
    console.log(`Выборочная дисперсия: ${varianceSample}`);
    console.log(`Выборочное среднее квадратическое отклонение: ${Gb}`);
    console.log(`Исправленные значения дисперсии S^2: ${S2}`);
    console.log(`Среднее квадратическое отклонение: ${S}`);
};

// calcShit(
//     16.95,
//     17.19,
//     16.1,
//     18.74,
//     17.31,
//     13.88,
//     17.32,
//     13.84,
//     17.95,
//     16.19,
//     13.48,
//     15.12,
//     17.36,
//     16.93,
//     10.91,
//     13.22,
//     19.25,
//     10.13,
//     15.53,
//     11.86,
//     14.2,
//     16.94,
//     13.59,
//     13.25,
//     12.77,
//     16.57,
//     14.1,
//     19.16,
//     17.41,
//     11.68,
//     14.65,
//     17.66,
//     15.73,
//     9.51,
//     13.9,
//     18.22,
//     11.71,
//     16.7,
//     15.84,
//     12.07,
//     16.87,
//     21.11,
//     17.39,
//     13.24,
//     14.83,
//     15.36,
//     13.08,
//     15.89,
//     20.65,
//     17.85
// );

calcShit(
    13.11,
    21.41,
    16.85,
    22.55,
    21.85,
    20.76,
    20.12,
    17.84,
    15.29,
    26.05,
    17.69,
    23.52,
    18.84,
    24.5,
    21.59,
    22.99,
    20.63,
    23.73,
    22.66,
    20.93,
    21.04,
    18.76,
    18.38,
    22.91,
    21.3,
    18.56,
    24.46,
    23.52,
    21.7,
    19.79,
    20.7,
    20.27,
    21.22,
    19.52,
    16.77,
    25.25,
    15.5,
    19.9,
    17.47,
    15.29,
    20.5,
    21.78,
    15.89,
    17.42,
    21.52,
    26.89,
    19.35,
    21.09,
    21.02,
    20.66
);
