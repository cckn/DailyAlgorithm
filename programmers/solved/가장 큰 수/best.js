function solution(numbers) {
    if (Math.max(...numbers) === 0) return "0";

    numbers = numbers.map(number => String(number));

    numbers.sort((a, b) => {
        const ab = a + b;
        const ba = b + a;
        return ba - ab;
    });

    return numbers.join("");
}
const results = [
    solution([6, 10, 2]),
    solution([3, 30, 34, 5, 9]),
    solution([0, 0, 0, 0, 0])
];
const expects = ["6210", "9534330", "0"];

results.forEach((result, idx) => console.log(result, result === expects[idx]));
