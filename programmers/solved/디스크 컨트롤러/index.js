function solution(jobs) {
    const jobsCount = jobs.length;
    let workingQueue = [];
    let workingJob = null;
    let time = 0;
    let processTime = 0;

    while (true) {
        workingQueue.push(...jobs.filter(job => job[0] <= time));
        jobs = jobs.filter(job => job[0] > time);

        if (!workingJob && workingQueue.length) {
            workingJob = workingQueue.sort((a, b) => a[1] - b[1]).shift()[1];
        }
        if (workingJob) {
            workingJob--;
            processTime += 1 + workingQueue.length;
            if (workingJob === 0) workingJob = null;
        }

        // console.log(workingJob, workingQueue, jobs, time, processTime);
        time++;

        if (!workingJob && !jobs.length && !workingQueue.length)
            return Math.floor(processTime / jobsCount);
    }
}
