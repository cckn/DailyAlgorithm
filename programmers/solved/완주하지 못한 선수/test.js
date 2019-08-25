const assert = require("assert");

assert(solution(["leo", "kiki", "eden"], ["eden", "kiki"]) === "leo");

assert(
    solution(
        ["marina", "josipa", "nikola", "vinko", "filipa"],
        ["josipa", "filipa", "marina", "nikola"]
    ) === "vinko"
);
assert(
    solution(
        ["mislav", "stanko", "mislav", "ana"],
        ["stanko", "ana", "mislav"]
    ) === "mislav"
);
