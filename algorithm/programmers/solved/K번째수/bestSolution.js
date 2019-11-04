function solution(array, commands) {
    return commands.map(([begin, end, index]) => {
        return array.slice(begin - 1, end).sort((a, b) => a - b)[index - 1];
    });
}

export default solution;
