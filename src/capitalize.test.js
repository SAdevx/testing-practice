import { capitalize } from "./capitalize";

test('Capitalize first letter in string', ()=> {
    expect(capitalize('cat')).toBe('Cat');
});

test('Capitalize first letter in string', ()=> {
    expect(capitalize('dog')).toBe('Dog');
});

test('Capitalize first letter in string', ()=> {
    expect(capitalize('lion')).toBe('Lion');
});