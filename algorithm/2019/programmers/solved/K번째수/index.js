function solution(array, commands) {
    const answer = [];

    commands.forEach(command => {
        const [begin, end, index] = command;
        answer.push(
            array.slice(begin - 1, end).sort((a, b) => a - b)[index - 1]
        );
    });

    return answer;
}

export default solution;
