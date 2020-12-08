function solution(heights) {
    const answer = [];

    heights.reverse().forEach((height, idx) => {
        const recvTower = heights
            .slice(idx + 1)
            .findIndex(tower => height < tower);

        answer.unshift(
            recvTower != -1 ? heights.length - idx - recvTower - 1 : 0
        );
    });
    return answer;
}

const paramsList = [
    [[6, 9, 5, 7, 4]],
    [[3, 9, 9, 3, 5, 7, 2]],
    [[1, 5, 3, 6, 7, 6, 5]]
];
const expects = [[0, 0, 2, 2, 4], [0, 0, 0, 3, 3, 3, 6], [0, 0, 2, 0, 0, 5, 6]];

paramsList.forEach((params, idx) => {
    const result = solution(...params);
    console.log(result, result === expects[idx]);
});
