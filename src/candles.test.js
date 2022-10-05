const solution = require('./candles.js');

test('test 1', () => {
    expect(solution(5, 2)).toBe(9);
});

test('test 2', () => {
    expect(solution(1, 2)).toBe(1);
});

test('test 3', () => {
    expect(solution(3, 3)).toBe(4);
});

test('test 4', () => {
    expect(solution(11, 3)).toBe(16);
});

test('test 5', () => {
    expect(solution(15, 5)).toBe(18);
});

test('test 6', () => {
    expect(solution(14, 3)).toBe(20);
});

test('test 7', () => {
    expect(solution(12, 2)).toBe(23);
});

test('test 8', () => {
    expect(solution(6, 4)).toBe(7);
});

test('test 9', () => {
    expect(solution(13, 5)).toBe(16);
});

test('test 10', () => {
    expect(solution(2, 3)).toBe(2);
});
