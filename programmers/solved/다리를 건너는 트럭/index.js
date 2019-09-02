function solution(bridge_length, weight, truck_weights) {
    const waitingTrucks = truck_weights.map(truck_weights => ({
        weight: truck_weights,
        distance: 0
    }));
    const onBridge = [];

    let time = 0;
    while (true) {
        if (onBridge.length) {
            onBridge.forEach(truck => {
                truck.distance += 1;
            });

            if (onBridge[0].distance === bridge_length) {
                onBridge.shift();
            }
        }

        if (
            waitingTrucks.length &&
            weight - onBridge.reduce((acc, truck) => acc + truck.weight, 0) >=
                waitingTrucks[0].weight
        ) {
            onBridge.push(waitingTrucks.shift());
        }

        time++;

        if (!waitingTrucks.length && !onBridge.length) {
            return time;
        }
    }
}

console.log(solution(1, 10, [1]), 2);
console.log(solution(2, 10, [7, 4, 5, 6]), 8);
console.log(solution(100, 100, [10]), 101);
console.log(solution(100, 100, [10, 10, 10, 10, 10, 10, 10, 10, 10, 10]), 110);
