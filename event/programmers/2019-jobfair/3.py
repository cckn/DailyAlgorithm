import collections


def solution(sticker):
    dp = [0] * len(sticker)
    queue = collections.deque()
    max = 0

    queue.append((0, sticker[0]))
    queue.append((1, sticker[1]))

    while queue:
        (sticket_idx, sum) = queue.popleft()
        if dp[sticket_idx] < sum:

            max = max if max > sum else sum
            dp[sticket_idx] = sum

            if (sticket_idx + 2 < len(sticker)):
                queue.append([sticket_idx + 2, sum + sticker[sticket_idx + 2]])

            if (sticket_idx + 3 < len(sticker)):
                queue.append([sticket_idx + 3, sum + sticker[sticket_idx + 3]])

    return max


print(solution([12, 12, 12, 12, 12]), 36)
print(solution([12, 80, 14, 22, 100]), 180)
