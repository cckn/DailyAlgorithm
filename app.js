function solution(array, commands) {
    const answer = [];

    commands.map(command => {
        const [begin, end, index] = command;
        answer.push(array.slice(begin, end).sort()[index]);
    });

    console.log(answer);

    return answer;
}

const assert = require("assert");

assert(
    solution([1, 5, 2, 6, 3, 7, 4], [[2, 5, 3], [4, 4, 1], [1, 7, 3]]) ===
        [5, 6, 3]
);
