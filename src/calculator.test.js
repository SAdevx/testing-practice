import { calculator } from "./calculator";

test('add two numbers', ()=> {
    expect(calculator.add(5,2)).toBe(7);
});

test('subtract two numbers', ()=> {
    expect(calculator.subtract(5,2)).toBe(3);
});

test('divide two numbers', ()=> {
    expect(calculator.divide(4,2)).toBe(2);
});

test('multiply two numbers', ()=> {
    expect(calculator.multiply(5,2)).toBe(10);
});