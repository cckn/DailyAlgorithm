def findIndex(list, func):
    for idx, element in enumerate(list):
        if func(element):
            return idx
    else:
        return idx


def solution(prices):
    result = []
    for idx, price in enumerate(prices):
        find = findIndex(prices[idx:], lambda x: x < price)
        result.append(find)

        # if find == -1:
        #     result.append(len(prices) - idx - 1)
        # else:
        #     result.append(find)
    return result


# print(solution([1]	), "[0]")
print(solution([1, 2, 3, 4, 5]	), "[4,3,2,1,0]")
print(solution([1, 2, 3, 2, 3]	), "[4, 3, 1, 1, 0]")
print(solution([1, 2, 3, 2, 3]	), "[4, 3, 1, 1, 0]")
