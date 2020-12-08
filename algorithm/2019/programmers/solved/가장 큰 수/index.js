function solution(numbers) {
    if (Math.max(...numbers) === 0) {
        return "0";
    }

    const sorted = numbers.sort((a, b) => {
        a = a.toString();
        b = b.toString();

        const length = a.length > b.length ? a.length : b.length;

        for (let i = 0; i < length; i++) {
            // console.log(`a: ${a[i]},b: ${b[i]}`);

            if (a[i] === undefined || b[i] === undefined) {
                const prev = a[i - 1];
                const current = a[i] || b[i];
                if (prev < current) {
                    // console.log(1);
                    return -1;
                } else {
                    // console.log(-1);
                    return 1;
                }
            }
            if (a[i] < b[i]) {
                // console.log(-1);
                return -1;
            } else if (a[i] > b[i]) {
                // console.log(1);
                return 1;
            }
        }
        return 0;
    });

    console.log(sorted.reverse());

    return sorted.join("");
}
