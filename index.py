STRUCT_PILLAR = 0
STRUCT_FLOOR = 1

ACTION_REMOVE = 0
ACTION_SET = 1


def solution(n, build_frame):

    pillar = [[None]*n for i in range(n)]
    floor = [[None]*n for i in range(n)]
    print(pillar, floor,  sep="\n")

    answer = [[]]

    for req in build_frame:
        x = req[0]
        y = req[1]
        struct = req[2]
        action = req[3]
        print('X {x} , Y {y}, ST {struct}, ACT {action}'.format(
            x=x, y=y, struct=struct, action=action))

        if action is ACTION_SET:
            if struct is STRUCT_PILLAR:
                pillar[x][y][0] = True
            else:
                pillar[x][y][0] = True

            print("set")
        if action is ACTION_REMOVE:
            print("REMOVE")

        # print(pframe)
    return answer


def build(frame, x, y, struct, action):
    size = len(frame)

    if action is ACTION_SET:
        if struct is STRUCT_PILLAR:
            frame[x][y] = True
        else:
            frame[x][y] = True

    print("set")
    if action is ACTION_REMOVE:
        print("REMOVE")
    # frame[x][y]
    print(size)


print(solution(3, [[1, 0, 0, 1]]))
