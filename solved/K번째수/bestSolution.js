function solution(array, commands) {
    return commands.map(([begin, end, index]) => {
        return array.slice(begin - 1, end).sort((a, b) => a - b)[index - 1];
    });
}

const assert = require("assert");

assert(
    solution([1, 5, 2, 6, 3, 7, 4], [[2, 5, 3], [4, 4, 1], [1, 7, 3]]) ===
        [5, 6, 3]
);
