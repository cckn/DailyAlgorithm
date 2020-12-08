function solution(genres, plays) {
    const dataModel = {};
    genres.forEach((genre, idx) => {
        const play = plays[idx];
        if (dataModel[genre]) {
            dataModel[genre].push({ idx, play });
        } else {
            dataModel[genre] = [{ idx, play }];
        }
    });

    genres = Object.keys(dataModel).sort((genreA, genreB) => {
        const playA = dataModel[genreA].reduce(
            (acc, song) => acc + song.play,
            0
        );
        const playB = dataModel[genreB].reduce(
            (acc, song) => acc + song.play,
            0
        );

        return playB - playA;
    });

    let answer = [];
    genres.forEach(genre => {
        const plays = dataModel[genre]
            .sort((a, b) => b.play - a.play || a.idx - b.idx)
            .map(song => song.idx);
        answer = [...answer, ...plays.slice(0, 2)];
    });

    return answer;
}
const results = [
    solution(
        ["classic", "pop", "classic", "classic", "pop"],
        [500, 600, 150, 800, 2500]
    )
];
const expects = [[4, 1, 3, 0]];

results.forEach((result, idx) => console.log(result, result === expects[idx]));
