def square_generator():
    i = 1
    while True:
        yield i, i * i
        i += 1

def is_perfect_cube(n):
    c = round(n ** (1/3))
    return c ** 3 == n

def filtered_squares():
    for index, value in square_generator():
        if not is_perfect_cube(index):
            yield value

def exponentialGenerator(n):
    gen = filtered_squares()
    result = None
    for _ in range(n):
        result = next(gen)
    return result
