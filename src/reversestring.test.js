import { reverString } from "./reversestring";

test('Reverse cat to tac', ()=> {
    expect(reverString('cat')).toBe('tac');
});

test('Reverse star to rats', ()=> {
    expect(reverString('star')).toBe('rats');
});

test('Reverse man to nam', ()=> {
    expect(reverString('man')).toBe('nam');
});