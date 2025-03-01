import { caesarCipher } from "./caesarcipher.js";

test('Turn xyz to abc', ()=> {
    expect(caesarCipher('xyz',3)).toBe('abc');
});

test('Turn HeLLo to khOOr', ()=> {
    expect(caesarCipher('HeLLo',3)).toBe('KhOOr');
});

test('Turn Hello, World! to Khoor, Zruog!', ()=> {
    expect(caesarCipher('Hello, World!',3)).toBe('Khoor, Zruog!');
});