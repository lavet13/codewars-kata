'use strict';

function solution(s, t) {
    let result = [];
    let diffIndex = s;

    const createSeq = function (t) {
        const result = [];
        let temp;

        let str = new Array(t).fill(0).join('');
        result.push(str);
        str = str.split('');
        console.log(str);

        for (let i = t - 1; i >= 0; i--) {
            if (str.indexOf(1) === -1) {
                temp = str.splice(i, 1);
                str.splice(i, 0, 1);
                result.push(str.join(''));
                continue;
            }

            temp = str.splice(str.indexOf(1), 1);
            str.splice(i, 0, 1);
            result.push(str.join(''));
        }

        console.log(result);
    };

    createSeq(t);
}

console.log(solution(2, 6)); // 10

/*
    Example:
    Given s = 2 and t = 4.
    We could schedule when runner should sprint so we could get these possible sequences:

    RRRR, RRRS, RRSR, RSRR, RSRS, SRRR, SRRS, SRSR
    
    Seq.: RRRR
    => s + s + s + s
    => 2 + 2 + 2 + 2 = 8
    Seq.: RRRS
    => s + s + s + s*2
    => 2 + 2 + 2 + 2*2 = 10
    Seq.: RRSR
    => s + s + s*2 + (s-1)
    => 2 + 2 + 2*2 + (2-1) = 9
    Seq.: RSRR
    => s + s*2 + (s-1) + (s-1)
    => 2 + 2*2 + (2-1) + (2-1) = 8
    Seq.: RSRS
    => s + s*2 + (s-1) + (s-1)*2
    => 2 + 2*2 + (2-1) + (2-1)*2 = 9
    Seq.: SRRR
    => s*2 + (s-1) + (s-1) + (s-1)
    => 2*2 + (2-1) + (2-1) + (2-1) = 7
    Seq.: SRRS
    => s*2 + (s-1) + (s-1) + (s-1)*2
    => 2*2 + (2-1) + (2-1) + (2-1)*2 = 8
    Seq.: SRSR
    => s*2 + (s-1) + (s-1)*2 + (s-1-1)
    => 2*2 + (2-1) + (2-1)*2 + (2-1-1) = 7

    Where:
    - R: Normal Run / Recovery
    - S: Sprint
    Based on above sequences, the maximum possible distance d is 10.
*/
