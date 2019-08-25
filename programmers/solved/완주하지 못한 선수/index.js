function solution(participant, completion) {
    const object = {};
    participant.forEach(element => {
        object[element] = object[element] ? object[element] + 1 : 1;
    });

    completion.forEach(element => {
        object[element] -= 1;
    });

    Object.keys(object).forEach(key => {
        if (object[key] === 1) {
            return key;
        }
    });
}
