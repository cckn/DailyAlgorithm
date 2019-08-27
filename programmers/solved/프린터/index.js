function solution(priorities, location) {
    const pages = priorities.map((priority, idx) => [
        priority,
        idx === location
    ]);

    let count = 0;
    while (pages) {
        const [currentPage, isMine] = pages.shift();

        if (pages.some(([page]) => currentPage < page)) {
            pages.push([currentPage, isMine]);
        } else {
            count++;
            if (isMine) return count;
        }
    }
}

const results = [solution([2, 1, 3, 2], 2), solution([1, 1, 9, 1, 1, 1], 0)];
const expects = [1, 5];

results.forEach((result, idx) => console.log(result === expects[idx], result));
